from django.contrib.auth.models import AbstractUser
from django.db import models

from users.choices import GENDER_CHOICES


class User(AbstractUser):
    date_of_birth = models.DateField(null=True)
    gender = models.CharField(choices=GENDER_CHOICES)
    email = models.EmailField(unique=True)
