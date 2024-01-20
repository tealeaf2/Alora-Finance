from django.urls import path
from classroom.views import *

urlpatterns = [
    path('units/', getAllUnits, name='all-units'),
    path('units/<int:uk>', getUnit, name='unit'),

    path('lessons/', getAllLessons, name='all-lessons'),
    path('units/<int:uk>/lessons/<int:lk>', getLesson, name='lesson'),

    path('units/<int:uk>/name', name_list),
]