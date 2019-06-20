from django.urls import path
from rest_framework.routers import SimpleRouter

from realty.views import (RealtyViewSet, RealtyPhotoViewSet, LikedRealtyViewSet,
                          UserRealtyListView, SharedRealtyViewSet)

__all__ = ['urlpatterns', ]

app_name = 'realty'

router = SimpleRouter()
router.register(r'default', RealtyViewSet, basename='default')
router.register(r'photos', RealtyPhotoViewSet, basename='photos')
router.register(r'likes', LikedRealtyViewSet, basename='likes')
router.register(r'share', SharedRealtyViewSet, basename='share')

urlpatterns = [
    path('users/<int:pk>', UserRealtyListView.as_view(), name='user-realty'),
]

urlpatterns += router.urls
