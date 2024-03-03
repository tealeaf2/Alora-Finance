import React, { useEffect, useState } from "react";
import sprout from "../images/Plant1.png";
import droplet from "../images/Water_Droplet.png";
import { useDispatch, useSelector } from "react-redux";
import { listTreeName, updateTreeName } from "../actions/treeActions";

export const NameInput = () => {
  const [tempName, setTempName] = useState("");
  const dispatch = useDispatch();

  const treeName = useSelector((state) => state.treeName);
  const { treeNameGet } = treeName;

  const name = treeNameGet.name;

  useEffect(() => {
    dispatch(listTreeName(1));
  }, [dispatch]);

  const handleName = (e) => {
    setTempName(e.target.value);
  };

  return (
    <>
      {name ? (
        <div style={{ fontSize: "30px", color: "#68b17e" }}>{name}</div>
      ) : (
        <form>
          <label>Enter your name: </label>
          <input
            type="text"
            name="tname"
            placeholder="Your name"
            value={tempName}
            onChange={handleName}
          />
          <button
            type="button"
            onClick={() => {
              if (tempName !== "") {
                dispatch(updateTreeName(1, { name: tempName }));
                dispatch(listTreeName(1));
              }
            }}
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export const ProgressLabel = ({ progress }) => {
  return (
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
  );
};

export const ProgressBar = ({ progress }) => {
  return (
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
  );
};

export const TreeProgress = ({ isActive }) => {
  return (
    <div className={`${isActive ? "block" : "hidden"}`} style={{ bottom: 0 }}>
      <div className="flex items-center justify-center">
        <img
          src={sprout}
          alt=""
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
    </div>
  );
};
