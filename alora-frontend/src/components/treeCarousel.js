import React, { useState, useEffect, useCallback } from "react";
import sprout from "../images/plants/plant1.png";
import droplet from "../images/Water_Droplet.png";
import { useDispatch, useSelector } from "react-redux";
import { listTreeName, updateTreeName } from "../redux/actions/treeActions";


const Carousel = (userId) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [tempName, setTempName] = useState("");
  const dispatch = useDispatch();
  const [inputFocused, setInputFocused] = useState(false);

  const treeNames = useSelector((state) => state.treeNames);
  const { error, loading, treeNameGet } = treeNames;
  // parseInt((treeNameGet[currentIndex].lessons_completed / treeNameGet[currentIndex].lessons_total * 100))

  const itemLength = 3;
  const name = "";

  const handleName = useCallback(() => {
    if (inputFocused && treeNameGet[currentIndex] && tempName !== "") {
      const topicId = treeNameGet[currentIndex].topic_number // Assuming you have access to topic_id
      dispatch(updateTreeName(tempName, topicId, userId.userId)) // Dispatch action to update topic_tree.tree_name
    }
  }, [dispatch, currentIndex, tempName, treeNameGet, inputFocused, userId]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemLength);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? itemLength - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    dispatch(listTreeName());
  }, [dispatch]);

  useEffect(() => {
    if (treeNameGet[currentIndex] && treeNameGet[currentIndex].tree_name) {
      setTempName(treeNameGet[currentIndex].tree_name)
    }
  }, [currentIndex, treeNameGet])


  const progress = treeNameGet && treeNameGet[currentIndex] && treeNameGet[currentIndex].lessons_total !== 0
    ? parseInt((treeNameGet[currentIndex].lessons_completed / treeNameGet[currentIndex].lessons_total * 100))
    : 0

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

              {/* <NameInput /> */}
              {treeNameGet && treeNameGet[currentIndex] &&
                (<div style={{ fontSize: "30px", color: "#bebdbd" }}>
                  <input
                    type="text"
                    name="tname"
                    placeholder={tempName ? tempName : "Enter Name"}
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    onFocus={() => setInputFocused(true)}
                    onBlur={() => {
                        setInputFocused(false);
                        handleName();
                    }}
                    className="text-[#bebdbd]"
                  />
                </div>)
              }
            </div>
            <div style={{ marginRight: "28%" }}>

              {/* <ProgressLabel progress={progress} /> */}
              <div className="flex items-end">
                <img
                  src={droplet}
                  alt="Water droplet"
                  style={{ width: "100px", height: "auto" }}
                />
                <div
                  className="text-5xl font-bold text-water-blue"
                  style={{ marginBottom: "5px" }}
                >
                  {progress}%
                </div>
              </div>

            </div>
          </div>
          <div style={{ flex: "1", overflowY: "auto" }}>

            {/* <ProgressBar progress={progress} /> */}
            <div className="progress-wrapper">
              <span id="ProgressLabel" className="sr-only">
                Loading
              </span>
              <div className="progress-bar">
                <span
                  role="progressbar"
                  aria-labelledby="ProgressLabel"
                  aria-valuenow={progress}
                  className="progress-inner"
                  style={{ width: `${progress}%` }}
                ></span>
              </div>
            </div>

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
              <div style={{ bottom: 0 }}>
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