import Header from '../global/Header';
import Quiz from '../components/Quiz';
import {quizzes} from './data';


export default function LessonsPage () {

    // is formatting of question ok? should abcd be included in original string? ask daniel how they will be outputted from backend
    let quiz = [
        {
            "id":1,
            "question": "What does the concept of 'Time Value of Money' primarily emphasize?",
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
            "id":2,
            "question": "What does the concept of 'Time Value of Money' primarily emphasize?",
            'choices': [
                'The value of money decreases over time due to inflation.',
                'A dollar today is worth more than a dollar tomorrow.',
                'Money can only be invested in time-bound projects.',
                'The value of money remains constant over time.',
            ],
            'correct_answer': 'A dollar today is worth more than a dollar tomorrow.',
            'correct_option': 2,
        },
    ];

    // let quiz = quizzes[0].question_answer

    // let slides = [
    //     "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    //     "https://wallpapercave.com/wp/wp3386769.jpg",
    //     "https://wallpaperaccess.com/full/809523.jpg",
    //     "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    //   ];
    

    return (
        <>
        <Header />

        <h1>HAHAHAHAHAHAHA IDK WHAT I'M DOING</h1>

        <Quiz quiz={quiz}/>
        {/* <Test quiz={slides}/> */}
        {/* <Test quiz={slides}/> */}

        </>
    );
}


{/* <div className="hidden duration-500 ease-in-out flex h-full items-center justify-center bg-gray-400/50 dark:bg-gray-700 dark:text-white" data-carousel-item>
                    slide 1
                </div>

                <div className="hidden duration-500 ease-in-out" data-carousel-item>
                    <img src={home_dude} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>

                <div className="hidden duration-500 ease-in-out" data-carousel-item>
                    <img src={money_tree} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>

                <div className="hidden duration-500 ease-in-out" data-carousel-item>
                    <img src={sprout} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>

                <div className="hidden duration-500 ease-in-out" data-carousel-item>
                    <img src={water_droplets} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div> */}


{/* <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button> */}