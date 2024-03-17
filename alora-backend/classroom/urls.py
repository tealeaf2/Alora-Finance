from django.urls import path
from classroom.curriculum.views.lesson_views import *
from classroom.curriculum.views.topic_views import *
from classroom.curriculum.views.unit_views import *

#Need to change everything here from units to topics, and change a lot lol
urlpatterns = [
    ################# For Lessons Page #################
    path('topics/', getAllTopics, name='all-topics'),
    path('units/<int:topic_id>/', getUnitsForTopic, name='units-of-topic'),
    path('unit/<int:uk>/lessons/', getAllLessons, name='unit-lessons'),

    ################# For Quiz Page #################

    path('lessons/<int:uk>/<int:lk>/video/', getLesson, name='lesson'),
    path('lessons/<int:lk>/quiz/', getQuiz, name='lesson-quiz'),

    ################# For Progress Page #################

    # path('units/<int:uk>/name', name_list),
    
    # path('user/progress', getProgress, name='progress'),
    # path('topics/', getAllTopics, name='all-topics'),
    # path('topics/<int:topic_id>/units/', getUnitsForTopic, name='get_units_for_topic'),
]
