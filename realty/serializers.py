from rest_framework import serializers
from rest_polymorphic.serializers import PolymorphicSerializer

from realty.models import Apartment, Building, Realty


class RealtySerializer(serializers.ModelSerializer):
    class Meta:
        model = Realty
        fields = '__all__'


class ApartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Apartment
        fields = '__all__'


class BuildingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Building
        fields = '__all__'


class RealtyPolymorphicSerializer(PolymorphicSerializer):
    model_serializer_mapping = {
        Realty: RealtySerializer,
        Apartment: ApartmentSerializer,
        Building: BuildingSerializer,
    }


class RealtyListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Realty
        fields = ['id', 'title', 'description', 'price', 'currency', 'offer', ]


class RealtyListPolymorphicSerializer(PolymorphicSerializer):
    model_serializer_mapping = {
        Realty: RealtyListSerializer,
        Apartment: RealtyListSerializer,
        Building: RealtyListSerializer,
    }
