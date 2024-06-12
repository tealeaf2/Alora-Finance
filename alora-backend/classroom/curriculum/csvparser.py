from  classroom.models import Lesson, Quiz
from django.shortcuts import get_object_or_404

def parsecsv(csv_data):
    '''
    recieves csv data and parses it, putting it into a list of JSON packages, 
    where each element represents an lesson and all of its questions
    '''
    
    #declare vars
    quizzes = []
    lesson_names = []
    lesson_n = -1

    #initialize quizzes list and lesson names list
    for line in csv_data:
        line = line.split(',')
        if lesson_n != line[1]:
            quizzes.append({"question_answer": []})
            lesson_names.append(line[3])
            lesson_n = line[1]


    #parse csv data to repackage into JSON format
    for line in csv_data:
        
        line = line.split(',')
        
        #add each line to the approriate lesson contained in quizzes
        quizzes[line[1]-1]["question_answer"].append({"id": line[7], "type": "", "question": line[8], "choices": [line[9], line[10], line[11], line[12], line[13]], "correct_answer": line[14], "correct_option": line.index(line[14])-8})
        
        #determine question type
        if line[9] == "TRUE":
            quizzes[line[1]-1]["question_answer"]["type"] = "TF"
        else:
            quizzes[line[1]-1]["question_answer"]["type"] = "MC"
    
    #placeholder value
    lesson_n = -1 

    #create new quiz instance for every lesson, and new lesson instance if one doesn't already exist
    for line in csv_data:
        line = line.split(',')
        if lesson_n != line[1]:
            lesson_result = get_object_or_404(Lesson, lesson_name = lesson_names[line[1]-1])
            if lesson_result.status_code == 404:
                newLesson = Lesson(lesson_name = line[3], video_link = line[5], video_script = line[6], lesson_num = line[1])
                newLesson.save()
                lesson_n = line[1]
            newQuiz = Quiz(content = quizzes[line[1]-1], )
            newQuiz.save()
            
