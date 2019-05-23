from django.urls import path
from rest_framework.routers import SimpleRouter

from realty.views import RealtyViewSet, RealtyPhotoViewSet, LikedRealtyViewSet

__all__ = ['urlpatterns', ]

app_name = 'realty'

router = SimpleRouter()
router.register(r'default', RealtyViewSet, basename='default')
router.register(r'photos', RealtyPhotoViewSet, basename='photos')
router.register(r'likes', LikedRealtyViewSet, basename='likes')

urlpatterns = router.urls
