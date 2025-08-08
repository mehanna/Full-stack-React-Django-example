from django.urls import path, include
from rest_framework import routers
from .api import ProductsViewSet

router = routers.DefaultRouter()
router.register('products', ProductsViewSet, 'products')

urlpatterns = [
    path('api/', include(router.urls)),
]