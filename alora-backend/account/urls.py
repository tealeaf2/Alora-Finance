from django.urls import path
from . import views

urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/profile/', views.getUserProfile, name='users-profile'),
    path('users/profile/update/', views.updateUserProfile, name='users-profile-update'),

    path('users/', views.getUsers, name='users'),
    path('users/register/', views.registerUser, name='register'),
]