from django.urls import path,include
from .views import languageApi
from . import views

urlpatterns = [
	path('language', languageApi.as_view(), name='trans'),
    path('', views.lobby),
    path('room/', views.room),
    path('get_token/', views.getToken),

    path('create_member/', views.createMember),
    path('get_member/', views.getMember),
    path('delete_member/', views.deleteMember),
]