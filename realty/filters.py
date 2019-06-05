import django_filters

from realty.models import Realty

__all__ = ['RealtyFilter', ]


class RealtyFilter(django_filters.rest_framework.FilterSet):
    class Meta:
        model = Realty
        fields = {
            'owner_phone': ['contains', ],
            'price': ['gte', 'lte', ],
            'offer': ['exact', ],
            'rooms': ['exact', ]
        }
