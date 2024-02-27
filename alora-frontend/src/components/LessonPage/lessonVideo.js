import React from 'react'


function LessonVideo({lesson}) {
  console.log(lesson.link)
  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_120px] lg:gap-8">
        <div className="h-32 rounded-lg bg-gray-200"> {lesson.name} </div>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="lg:col-span-1">
            <iframe
              width="615"
              height="344"
              src={lesson.link}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        <div className="lg:col-span-1 h-32 mx-20 rounded-lg bg-gray-200">
          script
        </div>
      </div>
    </>
  );
}
  
export default LessonVideo;