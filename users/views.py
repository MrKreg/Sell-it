from django.contrib.auth import get_user_model
from rest_framework import generics, viewsets, mixins
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from Sell_it.pagination import DefaultPagination
from users.filters import UserFilter
from users.serializers import SignUpSerializer, ProfileSerializer, \
    UserListSerializer
from users.models import User

__all__ = ['SignUpView', 'UsernameExistsView', 'UsersViewSet', 'ProfileView', ]


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


class UsersViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin,
                   viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = ProfileSerializer
    filterset_class = UserFilter
    pagination_class = DefaultPagination
    permission_classes = (AllowAny,)

    def list(self, request, *args, **kwargs):
        self.serializer_class = UserListSerializer
        self.queryset = User.objects.exclude(pk=request.user.pk)
        return super().list(request, *args, **kwargs)


class UsernameExistsView(generics.RetrieveAPIView):
    permission_classes = (AllowAny,)

    def get(self, request, *args, **kwargs):
        if get_user_model().objects.filter(
                username=self.request.data['username']):
            return Response({'is_exists': True})
        return Response({'is_exists': False})
