import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { listUnits } from '../../actions/unitActions'
import { listLessons } from '../../actions/lessonActions'


export default function LessonsFooter({unit_num, lesson_num, setResetSelectedOptions}) {

  // For connecting to Redux state
  const dispatch = useDispatch();
  const unitList = useSelector(state => state.unitList);
  const {errorUnits, loadingUnits, units} = unitList;
  const lessonList = useSelector(state => state.lessonList);
  const {errorLessons, loadingLessons, lessons} = lessonList;

  // Tracks the current unit and lesson number
  const [currentUnitNumber, setCurrentUnitNumber] = useState(parseInt(unit_num));
  const [currentLessonNumber, setCurrentLessonNumber] = useState(parseInt(lesson_num));

  // For page redirecting
  const navigate = useNavigate();

  // For retrieving units and lessons data
  useEffect(() => {
    dispatch(listUnits());
  }, [dispatch]);

  useEffect(() => {
    dispatch(listLessons(currentUnitNumber));
  }, [dispatch, currentUnitNumber]);

  // Navigate when component mounts
  useEffect(() => {
    if (units.length > 0 && lessons.length > 0) {
      navigate(`/unit/${currentUnitNumber}/lesson/${currentLessonNumber}/${lessons[currentLessonNumber-1].id}`);
    }
  }, [navigate, currentUnitNumber, currentLessonNumber, units, lessons]);

  const goToPreviousLesson = async () => {
    try{
      if (currentLessonNumber > 1) {
        setCurrentLessonNumber(prevLessonNumber => prevLessonNumber - 1);

        setResetSelectedOptions(true); // ensures previous selections aren't carried over
      }
      else if (currentUnitNumber > 1 && units[currentUnitNumber-2].lessons_total > 0) {
        setCurrentLessonNumber(units[currentUnitNumber-2].lessons_total);
        setCurrentUnitNumber(prevUnitNumber => prevUnitNumber - 1);

        setResetSelectedOptions(true); // ensures previous selections aren't carried over
      }

      // Scroll to the top of the screen
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
    catch (error){
      console.log(error);
    }
    
  };
  
  const goToNextLesson = async () => {
    try{
      if (currentLessonNumber < units[currentUnitNumber-1].lessons_total) {
        setCurrentLessonNumber(prevLessonNumber => prevLessonNumber + 1);

        setResetSelectedOptions(true); // ensures previous selections aren't carried over
      }
      else if (currentUnitNumber < units.length && units[currentUnitNumber].lessons_total > 0) {
        setCurrentUnitNumber(prevUnitNumber => prevUnitNumber + 1);
        setCurrentLessonNumber(1);

        setResetSelectedOptions(true); // ensures previous selections aren't carried over
      }

      // Scroll to the top of the screen
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
    catch(error){
      console.log(error);
    }
    
  };


  // Check if unitList or lessonList is undefined or still loading
  if ((!unitList || loadingUnits) || (!lessonList || loadingLessons)) {
    // Return loading indicator or handle loading state
    return <div>Loading...</div>;
  }

  return(
      <footer className="w-full bottom-0">
        <div className="flex h-full w-full justify-between space-x-2 items-center text-xl sm:text-2xl font-semibold">
              <button
                className="border-4 rounded-full border-button-orange text-center px-7 py-2 hover:bg-button-orange hover:text-white text-semibold"
                onClick={goToPreviousLesson}
              >
                Previous Lesson
              </button>
              <button
                className="border-4 rounded-full border-button-orange text-center px-7 py-2 hover:bg-button-orange hover:text-white text-semibold"
                onClick={goToNextLesson}
              >
                Next Lesson
              </button>
        </div>
      </footer>
  )
}