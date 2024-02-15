export const units = [
    {
        '_id': 1,
        'unit_name': 'Basic Principles',
        'number_of_lessons': 1,
        'icon_image': '/images/unit_icons1.jpg',
    },
    {
        '_id': 2,
        'unit_name': 'Personal Insurance Policy',
        'number_of_lessons': 1,
        'icon_image': '/images/unit_icons2.jpg',
    },
    {
        '_id': 3,
        'unit_name': 'Loan Applications',
        'number_of_lessons': 1,
        'icon_image': '/images/unit_icons3.jpg',
    }
]

export const lessons = [
    {
        'unit_id': 1,
        'lesson_id': 1,
        'video_link': 'https://youtu.be/gkp-7yhfreg?si=_6Ccm1kT9zSjbkeW',
        'lesson_name': 'Time Value of Money',
    },
    {
        'unit_id': 2,
        'lesson_id': 1,
        'video_link': 'https://youtu.be/p7HKvqRI_Bo?si=JWLMFJ7xLgv40UhF',
        'lesson_name': 'What is the Stock Market?',
    },
    {
        'unit_id': 3,
        'lesson_id': 1,
        'video_link': 'https://www.youtube.com/watch?v=3ctoSEQsY54',
        'lesson_name': 'What is Insurance?',
    },
]

export const quiz1 = [
    {
       "question_answer":[
          {
             "id":1,
             "type":"MC",
             "question":"What does 'commission' primarily refer to in a business context?",
             "choices":[
                "A fixed salary paid to employees.",
                "A tax imposed on goods.",
                "A bonus for long-term employees.",
                "A percentage of a sale paid to a salesperson"
             ],
             "correct_answer":"A percentage of a sale paid to a salesperson",
             "correct_option":4
          },
          {
             "id":2,
             "type":"MC",
             "question":"In which of these industries is commission commonly used as a form of compensation?",
             "choices":[
                "Manufacturing",
                "Retail sales",
                "Education",
                "Government Services"
             ],
             "correct_answer":"Retail sales",
             "correct_option":2
          },
          {
             "id":3,
             "type":"MC",
             "question":"How is a commission generally calculated?",
             "choices":[
                "Based on the number of hours worked.",
                "As a percentage of total sales.",
                "Based on the quality of work.",
                "As a flat rate per sale."
             ],
             "correct_answer":"As a percentage of total sales.",
             "correct_option":2
          },
          {
             "id":4,
             "type":"MC",
             "question":"What is a common feature of commission-based jobs?",
             "choices":[
                "Guaranteed income regardless of sales.",
                "Fixed working hours.",
                "Income depends on performance and sales achieved.",
                "Commission is a one-time payment."
             ],
             "correct_answer":"Income depends on performance and sales achieved.",
             "correct_option":3
          },
          {
             "id":5,
             "type":"MC",
             "question":"Which statement best describes a 'commission-only' job?",
             "choices":[
                "The employee receives a fixed salary plus a commission.",
                "The employee is paid solely based on the commissions they earn.",
                "The employee receives a commission in addition to hourly wages.",
                "The employee is paid a commission once a year."
             ],
             "correct_answer":"The employee is paid solely based on the commissions they earn.",
             "correct_option":2
          }
       ]
    }
 ]

 export const quiztemp = [
   {
      "question_answer":[
         {
            "id":1,
            "type":"MC",
            "question":"What is the relationship between risk and return in investing?",
            "choices":[
               "Higher risk usually leads to higher returns.",
               "Higher risk always guarantees higher returns.",
               "Lower risk leads to higher returns.",
               "Risk and return are not related."
            ],
            "correct_answer":"Higher risk usually leads to higher returns.",
            "correct_option":1
         },
         {
            "id":2,
            "type":"TF",
            "question":"True or False: A savings account typically has a higher return because it is low risk.",
            "choices":[
               "TRUE",
               "FALSE"
            ],
            "correct_answer":"FALSE",
            "correct_option":2
         },
         {
            "id":3,
            "type":"MC",
            "question":"Why might an investor choose a high-risk investment?",
            "choices":[
               "For the potential of higher returns.",
               "Because all investments are the same.",
               "There is no reason; it's always better to choose low-risk.",
               "To lose money"
            ],
            "correct_answer":"For the potential of higher returns.",
            "correct_option":1
         },
         {
            "id":4,
            "type":"MC",
            "question":"How should an individual balance risk and return?",
            "choices":[
               "By only choosing low-risk investments.",
               "By investing all their money in high-return options.",
               "By diversifying their investment portfolio.",
               "By following market trends blindly."
            ],
            "correct_answer":"By diversifying their investment portfolio.",
            "correct_option":3
         },
         {
            "id":5,
            "type":"MC",
            "question":"What does a 'risk tolerance' refer to in personal finance?",
            "choices":[
               "The ability to tolerate financial loss.",
               "The interest rate on a loan.",
               "The returns on an investment.",
               "The legal restrictions on investing."
            ],
            "correct_answer":"The ability to tolerate financial loss.",
            "correct_option":1
         }
      ]
   }
]