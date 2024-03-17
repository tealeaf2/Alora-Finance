import React, {useState, useEffect} from 'react';
import axios from 'axios';

function LessonVideo({lesson}) {
  // For loading unit image
  const [imageURL, setImageURL] = useState('');
//   useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://your-django-backend-url/api/model-data/1/'); // <== Replace url with django endpoint when endpoint is made. Don't think it exists rn.
//             setImageURL(response.data.image_url);
//         } catch (error) {
//             console.error('Error fetching image data:', error);
//         }
//     };
//     fetchData();
// }, []);

  return (
    // Container for content section
    <div className="grid grid-cols-1 lg:gap-x-6 gap-y-2 lg:grid-cols-3">
      {/* Container for title */}
      <div className="flex flex-col gap-x-8 lg:flex-row items-center lg:col-span-2 text-3xl lg:justify-between font-semibold">
        <div className="flex items-center">
          {imageURL && <img
            src={imageURL}
            className="text-sm w-12 h-12 mr-1"
            alt="unit icon"
          />}
          <div>{lesson.lesson_name}</div>
        </div>
        
        <div className="text-button-orange whitespace-nowrap">Lesson {lesson.lesson_num}</div>
      </div>
      {/* Container for Video */}
      <div className="lg:col-span-2 grid grid-cols-1 gap-4 lg:gap-8 rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <iframe
            className = "w-full h-full"
            src={lesson.video_link}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
      </div>
      {/* Container for Script */}
      <div className="h-full border-8 border-sky-blue rounded-xl p-3">
          script
        </div>
    </div>
  );
}
  
export default LessonVideo;