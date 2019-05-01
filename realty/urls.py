from django.urls import path
from rest_framework.routers import SimpleRouter

from realty.views import RealtyViewSet

__all__ = ['urlpatterns', ]

app_name = 'realty'

router = SimpleRouter()
router.register(r'default', RealtyViewSet)

urlpatterns = router.urls
