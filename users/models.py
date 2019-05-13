from django.contrib.auth.models import AbstractUser
from django.db import models

from Sell_it.fields import PhoneField
from realty.models import Realty
from users.choices import GENDER_CHOICES

__all__ = ['User', ]


class User(AbstractUser):
    birth_date = models.DateField(null=True)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES, null=True)
    email = models.EmailField(unique=True)
    phone = PhoneField()
    image = models.ImageField(upload_to='profile_img', blank=True, null=True)
    liked = models.ManyToManyField(Realty)
