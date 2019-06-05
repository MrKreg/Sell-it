from rest_framework.pagination import PageNumberPagination

__all__ = ['DefaultPagination', ]


class DefaultPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 1000
