from django.urls import path
from .views import add_task, get_tasks, delete_task

urlpatterns = [
    path('add_task/', add_task),
    path('get_tasks/', get_tasks),
    path('delete_task/<int:id>/', delete_task),
]