from rest_framework import serializers
from rest_polymorphic.serializers import PolymorphicSerializer

from realty.models import Apartment, Building, Realty, RealtyPhoto


class RealtyPhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = RealtyPhoto
        fields = ['photo', ]


class RealtySerializer(serializers.ModelSerializer):
    class Meta:
        model = Realty
        fields = '__all__'


class ApartmentSerializer(serializers.ModelSerializer):
    photos = RealtyPhotoSerializer(many=True)

    class Meta:
        model = Apartment
        fields = (
            'title', 'description', 'price', 'currency', 'area', 'flooring',
            'rooms', 'owner_phone', 'owner_name', 'offer', 'creator', 'link',
            'floor', 'kitchen_area', 'photos')


class BuildingSerializer(serializers.ModelSerializer):
    photos = RealtyPhotoSerializer(many=True)

    class Meta:
        model = Building
        fields = (
            'title', 'description', 'price', 'currency', 'area', 'flooring',
            'rooms', 'owner_phone', 'owner_name', 'offer', 'creator', 'link',
            'field_area', 'photos')


class RealtyPolymorphicSerializer(PolymorphicSerializer):
    model_serializer_mapping = {
        Realty: RealtySerializer,
        Apartment: ApartmentSerializer,
        Building: BuildingSerializer,
    }


class RealtyListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Realty
        fields = ['id', 'title', 'description', 'price', 'currency', 'offer',
                  'rooms']


class RealtyListPolymorphicSerializer(PolymorphicSerializer):
    model_serializer_mapping = {
        Realty: RealtyListSerializer,
        Apartment: RealtyListSerializer,
        Building: RealtyListSerializer,
    }
