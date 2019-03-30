from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from users.views import SignUpView, ProfileView

__all__ = ['urlpatterns', ]

app_name = 'users'

urlpatterns = [
    path('token/', include([
        path('obtain/', TokenObtainPairView.as_view()),
        path('refresh/', TokenRefreshView.as_view()),
    ])),
    path('sign-up/', SignUpView.as_view()),
    path('profile/', ProfileView.as_view()),
]
