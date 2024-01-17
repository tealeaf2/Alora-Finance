from django.urls import path
from classroom.views import *

urlpatterns = [
    path('units/', getAllUnits, name='all-units'),
    path('units/<int:pk>', getUnit, name='unit'),
    path('lessons/', getAllLessons, name='all-lessons'),
    path('lessons/<int:pk>', getLesson, name='all-lessons'),
    path('names/', name_list),
    path('names/<int:id>', name_detail)
]