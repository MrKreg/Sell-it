from django.core.validators import MaxValueValidator
from django.db import models
from polymorphic.models import PolymorphicModel

from Sell_it.fields import PhoneField
from realty.choices import (CURRENCY_CHOICE, OFFER_TYPES_CHOICE)

__all__ = ['Realty', 'Apartment', 'Building', 'RealtyPhoto', ]

TRUNCATE_CHARS = 30


class Realty(PolymorphicModel):
    title = models.CharField(max_length=100)
    description = models.TextField()
    price = models.PositiveIntegerField()
    currency = models.CharField(max_length=1, choices=CURRENCY_CHOICE)
    area = models.PositiveIntegerField()
    flooring = models.PositiveIntegerField(validators=(MaxValueValidator(100),))
    rooms = models.PositiveIntegerField(validators=(MaxValueValidator(100),))
    owner_phone = PhoneField(unique=False)
    owner_name = models.CharField(max_length=50)
    offer = models.CharField(max_length=10, choices=OFFER_TYPES_CHOICE)
    creator = models.ForeignKey('users.User', on_delete=models.CASCADE,
                                null=True, blank=True)
    link = models.URLField(max_length=2000, unique=True, db_index=True,
                           null=True, blank=True)

    def __str__(self):
        return self.title[:TRUNCATE_CHARS]


class Apartment(Realty):
    floor = models.PositiveIntegerField()
    kitchen_area = models.PositiveIntegerField()


class Building(Realty):
    field_area = models.PositiveIntegerField(
        validators=(MaxValueValidator(100),))


class RealtyPhoto(models.Model):
    photo = models.ImageField(upload_to='realty_img')
    realty = models.ForeignKey('Realty',
                               related_name='photos',
                               on_delete=models.CASCADE)
