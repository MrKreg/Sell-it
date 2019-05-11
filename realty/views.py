from django.db.models import Q
from rest_framework import viewsets

from realty.filters import RealtyFilter
from realty.models import Realty
from realty.serializers import (RealtyPolymorphicSerializer,
                                RealtyListPolymorphicSerializer)


class RealtyViewSet(viewsets.ModelViewSet):
    queryset = Realty.objects.all()
    serializer_class = RealtyPolymorphicSerializer
    filterset_class = RealtyFilter

    def get_queryset(self):
        return Realty.objects.filter(
            Q(creator=self.request.user) | Q(link__isnull=False))

    def list(self, request, *args, **kwargs):
        self.serializer_class = RealtyListPolymorphicSerializer
        return super().list(request, args, kwargs)
