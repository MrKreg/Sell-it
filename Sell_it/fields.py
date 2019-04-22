import re

from django.core.validators import RegexValidator
from django.db.models import CharField

REG_PHONE_NUMBER = re.compile(r'^\+?3?8?(0[5-9][0-9]\d{7})$')


class PhoneField(CharField):
    default_validators = [RegexValidator(REG_PHONE_NUMBER), ]

    def __init__(self, *args, **kwargs):
        kwargs['max_length'] = 14
        kwargs['unique'] = True
        kwargs['db_index'] = True
        super().__init__(*args, **kwargs)
