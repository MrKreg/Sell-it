import django_filters

from users.models import User

__all__ = ['UserFilter', ]


class UserFilter(django_filters.FilterSet):
    class Meta:
        model = User
        fields = {
            'first_name': ['icontains', ],
            'last_name': ['icontains', ],
            'phone': ['icontains', ],
        }
