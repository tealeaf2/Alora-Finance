import React, { useState, useEffect } from "react";
import sprout from "../images/plants/plant1.png";
import { useDispatch, useSelector } from "react-redux";
import { listTreeName, updateTreeName } from "../redux/actions/treeActions";
import {
  NameInput,
  ProgressBar,
  ProgressLabel,
} from "./treeProgress";


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const dispatch = useDispatch();

  const treeNames = useSelector((state) => state.treeNames);
  const { error, loading, treeNameGet } = treeNames;
  // parseInt((treeNameGet[currentIndex].lessons_completed / treeNameGet[currentIndex].lessons_total * 100))

  useEffect(() => {
    dispatch(listTreeName());
  }, [dispatch, treeNameGet]);

  const itemLength = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemLength);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? itemLength - 1 : prevIndex - 1
    );
  };

  const progress = treeNameGet && treeNameGet[currentIndex] ?
    parseInt((treeNameGet[currentIndex].lessons_completed / treeNameGet[currentIndex].lessons_total * 100)) :
    0;

  if (loading) return <div>Loading...</div>;
  else if (error) return <div>Error: {error}</div>;
  else {
    return (
      <>

        <div
          style={{
            height: "80%",
            display: "flex",
            flexDirection: "column",
            marginTop: "2%",
          }}
        >
          <div
            style={{
              height: "10%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{ marginLeft: "28%", display: "flex", alignItems: "center" }}
            >
              <span style={{ fontSize: "30px", color: "#68b17e" }}>
                name:&nbsp;
              </span>
              <NameInput />
            </div>
            <div style={{ marginRight: "28%" }}>
              <ProgressLabel progress={progress} />
            </div>
          </div>
          <div style={{ flex: "1", overflowY: "auto" }}>
            <ProgressBar progress={progress} />
          </div>
        </div>
        <div className="flex justify-between">
          <button
            style={{
              flex: "1",
              width: "5vw",
              fontSize: "10vw",
              color: "#68b17e",
              fontWeight: "bold",
            }}
            onClick={prevSlide}
          >
            {"<"}
          </button>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <div style={{ flex: "1", position: "relative", marginTop: "10px" }}>
              <div className={`${currentIndex ? "block" : "hidden"}`} style={{ bottom: 0 }}>
                <div className="flex items-center justify-center">
                  <img
                    src={sprout}
                    alt=""
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            style={{
              flex: "1",
              width: "5vw",
              fontSize: "10vw",
              color: "#68b17e",
              fontWeight: "bold",
            }}
            onClick={nextSlide}
          >
            {">"}
          </button>
        </div>
      </>
    );
  }
};

export default Carousel;