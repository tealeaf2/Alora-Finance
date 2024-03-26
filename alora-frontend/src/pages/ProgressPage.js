import "../styles/App.css";
import Header from "../global/Header";
import TreeCarousel from "../components/treeCarousel";
import {
  NameInput,
  ProgressBar,
  ProgressLabel,
} from "../components/treeProgress";


import React, { useState , useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function Progress() {

    const location = useLocation();
    const history = useNavigate();
    const redirect = location.search ? location.search.split('=')[1] : '/login';
    const accountLogin = useSelector(state => state.accountLogin);
    const { error, loading, accountInfo } = accountLogin;


    useEffect(() => {
        if (!accountInfo) {
            history(redirect);
        }
    }, [accountInfo, redirect, history]);





    const [progress] = useState(35); // Change this value for progress

    return (
      <div
        className="App"
        style={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
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
        <div style={{ marginTop: "auto" }}>
          <TreeCarousel />
        </div>
      </div>
    );
  }

export default Progress;
