import django_filters
from django.db.models import Q

from users.models import User

__all__ = ['UserFilter', ]


class UserFilter(django_filters.FilterSet):
    search = django_filters.CharFilter(method='search_filter')

    def search_filter(self, queryset, name, value):
        return queryset.filter(Q(username__icontains=value)
                               | Q(first_name__icontains=value)
                               | Q(last_name__icontains=value))
