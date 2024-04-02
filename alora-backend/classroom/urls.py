from django.urls import path
from classroom.curriculum.views.lesson_views import *
from classroom.curriculum.views.topic_views import *
from classroom.curriculum.views.unit_views import *
from classroom.curriculum.views.quiz_views import *
from classroom.curriculum.views.progress_views import *

#Need to change everything here from units to topics, and change a lot lol
urlpatterns = [
    ################# For Lessons Page #################
    path('topics/', getAllTopics, name='all-topics'),
    path('units/<int:topic_id>/', getUnitsForTopic, name='units-of-topic'),
    path('unit/<int:uk>/lessons/', getAllLessons, name='unit-lessons'),

    ################# For Quiz Page #################

    path('lessons/<int:uk>/<int:lk>/video/', getLesson, name='lesson'),
    path('lessons/<int:lk>/quiz/user/<int:user_id>/', getQuiz, name='lesson-quiz'),
    path('lessons/<int:lk>/quiz/update-user/<int:user_id>/', updateQuizProgress, name='update-quiz-progress-user'),

    ################# For Parsing Quiz #################

    path('parse-quiz-file/', parseToQuiz, name='parsing-quizzes-from-csv'),

    ################# For Progress Page #################

    path('user/student/progress/', getProgressOfStudent, name='progress-of-student-on-trees'),
    path('user/student/<int:user_id>/progress/<int:topic_id>', updateTreeOfTopicTree, name='update-name-of-topic-tree'),

    # path('units/<int:uk>/name', name_list),
    
    # path('user/progress', getProgress, name='progress'),
    # path('topics/', getAllTopics, name='all-topics'),
    # path('topics/<int:topic_id>/units/', getUnitsForTopic, name='get_units_for_topic'),
]
