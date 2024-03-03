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

export const quizzes = [
    {
        'unit_id': 1,
        'lesson_id': 1,
        'question_answer': [{
            'id': 1,
            'question': 'What does the concept of Time Value of Money primarily emphasize?',
            'choices': [
                'The value of money decreases over time due to inflation.',
                'A dollar today is worth more than a dollar tomorrow.',
                'Money can only be invested in time-bound projects.',
                'The value of money remains constant over time.',
            ],
            'correct_answer': 'A dollar today is worth more than a dollar tomorrow.',
            'correct_option': 2,
        },
        {
            'id': 2,
            'question': 'Which factor is crucial in determining the future value of money?',
            'choices': [
                'Economic conditions',
                'Interest rates',
                'Stock market performance',
                'Political stability',
            ],
            'correct_answer': 'Interest rates',
            'correct_option': 2,   
        },
        {
            'id': 3,
            'question': 'What is the primary reason for the time value of money?',
            'choices': [
                'Opportunity cost of spending money now rather than saving.',
                'The historical performance of financial markets.',
                'Government regulations on banking.',
                'The physical durability of currency.',
            ],
            'correct_answer': 'Opportunity cost of spending money now rather than saving.',
            'correct_option': 1,   
        },
        {
            'id': 4,
            'question': 'In time value of money calculations, what does compounding refer to?',
            'choices': [
                'The process of calculating the total interest on a loan.',
                'Earning interest on both the principal and the accumulated interest.',
                'The act of investing money in multiple assets.',
                'Reducing the principal amount of a loan over time.',
            ],
            'correct_answer': 'Earning interest on both the principal and the accumulated interest.',
            'correct_option': 2,   
        },
        ]
    },
    {
        'unit_id': 2,
        'lesson_id': 1,
        'question_answer': [{
            'id': 1,
            'question': 'What is the stock market mainly used for?',
            'choices': [
                'Saving money in a bank account.',
                'Buying and selling shares of companies.',
                'Exchanging foreign currencies.',
                'Purchasing government bonds.',
            ],
            'correct_answer': 'Buying and selling shares of companies.',
            'correct_option': 2,
        },
        {
            'id': 2,
            'question': 'What is a share in the context of the stock market?',
            'choices': [
                'A piece of financial advice.',
                'A certificate of deposit.',
                'A unit of ownership in a company.',
                'An insurance policy.',
            ],
            'correct_answer': 'A unit of ownership in a company.',
            'correct_option': 3,   
        },
        {
            'id': 3,
            'question': 'Why do people invest in the stock market?',
            'choices': [
                'To keep their money safe.',
                'To earn a fixed interest rate.',
                'To potentially make a profit from their investments.',
                'To purchase goods and services.',
            ],
            'correct_answer': 'To potentially make a profit from their investments.',
            'correct_option': 3,   
        },
        {
            'id': 4,
            'question': "What happens when a company's stock price goes up?",
            'choices': [
                'The company has to pay more taxes.',
                'The value of shares owned in the company increases.',
                'The company must issue more shares.',
                'The company becomes a government entity.',
            ],
            'correct_answer': 'The value of shares owned in the company increases.',
            'correct_option': 2,   
        },
        ]
    },
    {
        'unit_id': 3,
        'lesson_id': 1,
        'question_answer': [{
            'id': 1,
            'question': 'What is the primary purpose of insurance?',
            'choices': [
                'To provide investment opportunities.',
                'To protect against financial loss from specific risks.',
                'To guarantee a profit from stock market investments.',
                'To lend money for personal or business use.',
            ],
            'correct_answer': 'To protect against financial loss from specific risks.',
            'correct_option': 2,
        },
        {
            'id': 2,
            'question': 'What does an insurance policy represent?',
            'choices': [
                'A contract between an individual and an insurance company.',
                'A government bond.',
                'A share in the stock market.',
                'A certificate of deposit in a bank.',
            ],
            'correct_answer': 'A contract between an individual and an insurance company.',
            'correct_option': 1,   
        },
        {
            'id': 3,
            'question': "What is a 'premium' in the context of insurance?",
            'choices': [
                'The interest rate on an insurance loan.',
                'The amount paid by an individual or business for insurance coverage.',
                'A reward for not filing any insurance claims.',
                ' The maximum amount an insurance company will pay.',
            ],
            'correct_answer': 'The amount paid by an individual or business for insurance coverage.',
            'correct_option': 2,   
        },
        {
            'id': 4,
            'question': 'What typically happens when you make a claim on an insurance policy?',
            'choices': [
                'You must pay back the claim amount with interest.',
                'Your insurance coverage is automatically canceled.',
                'The insurance company assesses the claim and may pay out money.',
                'You receive shares in the insurance company.',
            ],
            'correct_answer': 'The insurance company assesses the claim and may pay out money.',
            'correct_option': 3,   
        },
        ]
    },
]