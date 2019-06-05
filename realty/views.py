import sys
from django.db.models import Q
from rest_framework import viewsets, status
from rest_framework import mixins
from rest_framework.response import Response

from realty.filters import RealtyFilter
from realty.models import Realty, RealtyPhoto, Apartment, Building
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

    def filter_queryset(self, queryset):
        queryset = super().filter_queryset(queryset)
        kind = self.request.query_params.get('kind')
        floor_lte = self.request.query_params.get('floor__lte')
        floor_gte = self.request.query_params.get('floor__gte')
        queryset = queryset.instance_of(eval(kind)) if kind else queryset
        queryset = queryset.filter(
            apartment__floor__lte=floor_lte) if floor_lte else queryset
        queryset = queryset.filter(
            apartment__floor__gte=floor_gte) if floor_gte else queryset
        return queryset

    def list(self, request, *args, **kwargs):
        self.serializer_class = RealtyListPolymorphicSerializer
        return super().list(request, args, kwargs)

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)


class RealtyPhotoViewSet(mixins.CreateModelMixin, mixins.DestroyModelMixin,
                         viewsets.GenericViewSet):
    queryset = RealtyPhoto.objects.all()
    serializer_class = RealtyPhotoSerializer


class LikedRealtyViewSet(mixins.UpdateModelMixin, mixins.DestroyModelMixin,
                         mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = Realty.objects.all()
    serializer_class = RealtyListPolymorphicSerializer
    filterset_class = RealtyFilter
    pagination_class = RealtyPagination

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        queryset = queryset.filter(user=request.user)

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.user_set.add(request.user)
        return Response(status=status.HTTP_200_OK)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.user_set.remove(request.user)
        return Response(status=status.HTTP_200_OK)
