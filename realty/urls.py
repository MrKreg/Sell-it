from django.urls import path

from realty.views import RealtyListView

__all__ = ['urlpatterns', ]

app_name = 'users'

urlpatterns = [
    path('', RealtyListView.as_view()),
]
