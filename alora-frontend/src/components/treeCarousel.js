import React, { useState } from 'react';
import TreeProgress from './treeProgress';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const itemLength = 2;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemLength);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? itemLength - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div>
        <button
          className="absolute top-1/2 left-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={prevSlide}
        >
          {'<'}
        </button>
        <button
          className="absolute top-1/2 right-0 bg-gray-800 text-white p-2 rounded-full"
          onClick={nextSlide}
        >
          {'>'}
        </button>
          <TreeProgress
            isActive={currentIndex}
          />
      </div>
    </div>
  );
};

export default Carousel;