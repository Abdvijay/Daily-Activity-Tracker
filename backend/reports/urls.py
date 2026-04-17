from django.urls import path
from .views import update_status, get_report

urlpatterns = [
    path('update_status/', update_status),
    path('get_report/', get_report),
]