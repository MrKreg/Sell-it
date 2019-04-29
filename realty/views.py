from django.db.models import Q
from rest_framework import viewsets

from realty.models import Realty
from realty.serializers import RealtyPolymorphicSerializer


class RealtyViewSet(viewsets.ModelViewSet):
    queryset = Realty.objects.all()
    serializer_class = RealtyPolymorphicSerializer

    def get_queryset(self):
        return Realty.objects.filter(
            Q(creator=self.request.user) | Q(link__isnull=False))
