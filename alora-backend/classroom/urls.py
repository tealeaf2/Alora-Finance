from django.urls import path
from classroom.views import *

#Need to change everything here from units to topics, and change a lot lol
urlpatterns = [
    path('units/', getAllUnits, name='all-units'),
    path('units/<int:uk>', getUnit, name='unit'),

    #For the unit and lessons page
    path('unit/<int:uk>/lessons/', getAllLessons, name='unit-lessons'),
    path('units/<int:uk>/lessons/<int:lk>', getFromUnitLesson, name='lesson'),
    path('lessons/<int:lk>/quiz', getQuiz, name='lesson-quiz'),

    #To get the tree name, but should change this to topic after topic model is done
    path('units/<int:uk>/name', name_list),
    
    #TODO
    path('progress', getAllProgress, name='progress'),
]