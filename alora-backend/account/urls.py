from django.urls import path
from . import views

urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/profile/', views.getUserProfile, name='users-profile'),
    path('users/profile/update', views.updateUserProfile, name='users-profile-update'),

    path('users/', views.getUsers, name='users'),
    path('users/register/', views.registerUser, name='register'),
    # path('units/', getAllUnits, name='all-units'),
    # path('units/<int:uk>', getUnit, name='unit'),

    # path('lessons/', getAllLessons, name='all-lessons'),
    # path('units/<int:uk>/lessons/<int:lk>', getLesson, name='lesson'),

    # path('units/<int:uk>/name', name_list),
    
    # path('progress', getAllProgress, name='progress'),
]