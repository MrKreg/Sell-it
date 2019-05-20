from django.db.models import Q
from rest_framework import viewsets
from rest_framework import mixins

from realty.filters import RealtyFilter
from realty.models import Realty, RealtyPhoto
from realty.pagination import RealtyPagination
from realty.serializers import (RealtyPolymorphicSerializer,
                                RealtyListPolymorphicSerializer,
                                RealtyPhotoSerializer)


class RealtyViewSet(viewsets.ModelViewSet):
    queryset = Realty.objects.all()
    serializer_class = RealtyPolymorphicSerializer
    filterset_class = RealtyFilter
    pagination_class = RealtyPagination

    def get_queryset(self):
        return Realty.objects.filter(
            Q(creator=self.request.user) | Q(link__isnull=False))

    def list(self, request, *args, **kwargs):
        self.serializer_class = RealtyListPolymorphicSerializer
        return super().list(request, args, kwargs)


class RealtyPhotoViewSet(mixins.CreateModelMixin, mixins.DestroyModelMixin,
                         viewsets.GenericViewSet):
    queryset = RealtyPhoto.objects.all()
    serializer_class = RealtyPhotoSerializer

    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)
