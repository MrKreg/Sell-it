import django_filters

from realty.models import Realty

__all__ = ['RealtyFilter', ]


class RealtyFilter(django_filters.FilterSet):
    class Meta:
        model = Realty
        fields = {
            'owner_phone': ['icontains'],
            'price': ['lt'],
            'rooms': ['exact']
        }
