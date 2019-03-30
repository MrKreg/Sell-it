from django.contrib.auth.models import AbstractUser
from django.db import models

from users.choices import GENDER_CHOICES


class User(AbstractUser):
    birth_date = models.DateField(null=True)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    email = models.EmailField(unique=True)
