from django.contrib.auth import get_user_model
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from users.serializers import SignUpSerializer, ProfileSerializer


class SignUpView(generics.CreateAPIView):
    model = get_user_model()
    serializer_class = SignUpSerializer
    permission_classes = (AllowAny,)


class ProfileView(generics.RetrieveUpdateAPIView):
    model = get_user_model()
    serializer_class = ProfileSerializer
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        return self.request.user


class UsernameExistsView(generics.RetrieveAPIView):
    permission_classes = (AllowAny, )

    def get(self, request, *args, **kwargs):
        if get_user_model().objects.filter(
                username=self.request.data['username']):
            return Response({'is_exists': True})
        return Response({'is_exists': False})
