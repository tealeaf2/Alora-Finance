import "../../styles/App.css";
import Header from "../../global/Header";
import Carousel from "../../components/treeCarousel";

import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function Progress() {
  const location = useLocation();
  const history = useNavigate();
  const redirect = location.search ? location.search.split('=')[1] : '/login';
  const accountLogin = useSelector(state => state.accountLogin);
  const { error, loading, accountInfo } = accountLogin;

  console.log("acc info")
  console.log(accountInfo)


  useEffect(() => {
    console.log("in use effet")

    if (!accountInfo){
      history(redirect)
    }
    else if (accountInfo && accountInfo.account_type !== 'S') {
      history(redirect)
    }
  }, [accountInfo, redirect, history])

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
      <div style={{ marginTop: "auto" }}>
      {accountInfo && <Carousel userId={accountInfo.id}/>}
      </div>
    </div>
  );
}

export default Progress;
