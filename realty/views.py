from rest_framework import generics

from realty.models import Realty
from realty.serializers import RealtySerializer


class RealtyListView(generics.ListCreateAPIView):
    queryset = Realty.objects.all()
    serializer_class = RealtySerializer
