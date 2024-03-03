import React, { useState } from "react";
import { TreeProgress } from "./treeProgress";

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
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <button
        style={{
          flex: "1",
          width: "50px",
          fontSize: "15rem",
          color: "#68b17e",
          fontWeight: "bold",
          textAlign: "center",
        }}
        onClick={prevSlide}
      >
        {"<"}
      </button>
      <div style={{ flex: "1", position: "relative", marginTop: "10px" }}>
        <TreeProgress isActive={currentIndex} />
      </div>
      <button
        style={{
          flex: "1",
          width: "50px",
          fontSize: "15rem",
          color: "#68b17e",
          fontWeight: "bold",
          textAlign: "center",
        }}
        onClick={nextSlide}
      >
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
