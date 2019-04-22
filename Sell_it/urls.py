from django.contrib import admin
from django.urls import path, include
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='Agora API')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', include('users.urls', namespace='users')),
    path('password_reset/',
         include('django_rest_passwordreset.urls', namespace='password_reset')),
    path('', schema_view),
]
