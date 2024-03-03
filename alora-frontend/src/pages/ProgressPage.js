import React, { useState } from "react";
import "../styles/App.css";
import Header from "../global/Header";
import TreeCarousel from "../components/treeCarousel";
import {
  NameInput,
  ProgressBar,
  ProgressLabel,
} from "../components/treeProgress";

function Progress() {
  const [progress] = useState(35); // Change this value for progress

  return (
    <div className="App" style={{ minHeight: "100vh", position: "relative" }}>
      <Header />
      <div
        style={{
          height: "80%",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          position: "relative",
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
        <div style={{ flexGrow: 1 }}>
          <ProgressBar progress={progress} />
        </div>
      </div>
      <div style={{ position: "absolute", bottom: "0", width: "100%" }}>
        <TreeCarousel />
      </div>
    </div>
  );
}

export default Progress;
