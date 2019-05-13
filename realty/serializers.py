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
    liked = serializers.SerializerMethodField()

    class Meta:
        model = Apartment
        fields = (
            'id', 'title', 'description', 'price', 'currency', 'area',
            'kitchen_area', 'floor', 'flooring', 'rooms', 'owner_phone',
            'owner_name', 'offer', 'creator', 'link', 'photos', 'liked')

    def get_liked(self, obj):
        return obj.user_set.filter(id=self.context['request'].user.id).exists()


class BuildingSerializer(serializers.ModelSerializer):
    photos = RealtyPhotoSerializer(many=True)
    liked = serializers.SerializerMethodField()

    class Meta:
        model = Building
        fields = (
            'id', 'title', 'description', 'price', 'currency', 'area',
            'field_area', 'flooring', 'rooms', 'owner_phone', 'owner_name',
            'offer', 'creator', 'link', 'photos')

    def get_liked(self, obj):
        return obj.user_set.filter(id=self.context['request'].user.id).exists()


class RealtyPolymorphicSerializer(PolymorphicSerializer):
    model_serializer_mapping = {
        Realty: RealtySerializer,
        Apartment: ApartmentSerializer,
        Building: BuildingSerializer,
    }


class RealtyListSerializer(serializers.ModelSerializer):
    liked = serializers.SerializerMethodField()

    class Meta:
        model = Realty
        fields = (
            'id', 'title', 'description', 'price', 'currency', 'offer', 'liked')

    def get_liked(self, obj):
        return obj.user_set.filter(id=self.context['request'].user.id).exists()


class RealtyListPolymorphicSerializer(PolymorphicSerializer):
    model_serializer_mapping = {
        Realty: RealtyListSerializer,
        Apartment: RealtyListSerializer,
        Building: RealtyListSerializer,
    }
