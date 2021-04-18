from django.urls import path

from . import views

urlpatterns = [
    path('post-route', views.RoutesPostView.as_view())
]