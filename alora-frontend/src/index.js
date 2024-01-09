import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
// import './styles/App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sprout from './images/Sprout.png'
// import { BrowserRouter } from 'react-router-dom';


import'./styles/main.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function Images(){

  return(
      <div>
          <img src={Images.img1} alt=""/>
      </div>
  )
}

export default Images

