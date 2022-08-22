from django.urls import path
from . import views

urlpatterns = [
    path('get-data', views.getData),
    path('add', views.addItem),
    path('<slug:id>/edit', views.editItem),
    path('<slug:id>/delete', views.deleteItem)
]