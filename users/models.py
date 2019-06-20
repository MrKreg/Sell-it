import uuid

from datetime import timedelta
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone
from rest_framework.exceptions import ValidationError

from Sell_it.fields import PhoneField
from realty.models import Realty
from users.choices import GENDER_CHOICES

__all__ = ['User', ]


class User(AbstractUser):
    birth_date = models.DateField(null=True)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES, null=True)
    email = models.EmailField(unique=True)
    phone = PhoneField(unique=True)
    image = models.ImageField(upload_to='profile_img', blank=True, null=True)
    liked = models.ManyToManyField(Realty)


class ShareInfo(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    sender = models.ForeignKey('users.User', on_delete=models.CASCADE)
    realty = models.ForeignKey('realty.Realty', on_delete=models.CASCADE)
    expiry_date = models.DateTimeField(
        default=timezone.now() + timedelta(days=1))
