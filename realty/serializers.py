from django.db import transaction
from rest_framework import serializers
from rest_polymorphic.serializers import PolymorphicSerializer

from realty.models import Apartment, Building, Realty, RealtyPhoto


class RealtyPhotoSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    photo = serializers.ImageField(required=False)

    class Meta:
        model = RealtyPhoto
        fields = ['id', 'photo', ]


class RealtySerializer(serializers.ModelSerializer):
    photos = RealtyPhotoSerializer(many=True, required=False)
    liked = serializers.SerializerMethodField()

    class Meta:
        model = Realty
        fields = '__all__'

    def get_liked(self, obj):
        return obj.user_set.filter(id=self.context['request'].user.id).exists()


class ApartmentSerializer(RealtySerializer):
    photos = RealtyPhotoSerializer(many=True)

    class Meta:
        model = Apartment
        fields = (
            'id', 'title', 'description', 'price', 'currency', 'area',
            'kitchen_area', 'floor', 'flooring', 'rooms', 'owner_phone',
            'owner_name', 'offer', 'creator', 'link', 'photos', 'liked')

    @transaction.atomic
    def create(self, validated_data):
        photos = validated_data.pop('photos')
        apartment = Apartment.objects.create(**validated_data)

        for photo in photos:
            photo_id = photo.pop(key='id')
            print(photo_id)
            photo = RealtyPhoto.objects.get(id=photo_id)
            apartment.photos.add(photo)
        return apartment

    def update(self, instance, validated_data):
        photos_data = validated_data.pop('photos')
        photos = list(instance.photos.all())
        instance = super().update(instance, validated_data)

        for photo_data in photos_data:
            photo = photos.pop(0)
            photo = photo_data.get('photo', photo)
            photo.save()
        return instance


class BuildingSerializer(RealtySerializer):
    photos = RealtyPhotoSerializer(many=True)
    liked = serializers.SerializerMethodField()

    class Meta:
        model = Building
        fields = (
            'id', 'title', 'description', 'price', 'currency', 'area',
            'field_area', 'flooring', 'rooms', 'owner_phone', 'owner_name',
            'offer', 'creator', 'link', 'photos', 'liked')


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
