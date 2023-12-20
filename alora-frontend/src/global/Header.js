import React from 'react';
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import '../styles/index.css';
import App from '../App';
import reportWebVitals from '../reportWebVitals';

import home_logo from '../images/Home_Logo.png';

const Header = () => {
    return (
        <header className="App-header">
            <div className="app-header-home">
                <a onClick={()=>void 0}><img src={home_logo} className="App-header-home-logo" alt='' width="260px" height='60px'/></a>
            </div>

            <div className="App-header-sections">
                <Link to="/lessons">
                <div className="App-header-sections-button App-header-sections-button1">
                    Lessons
                </div>
                </Link>
                
                <Link to="/games">
                <div className="App-header-sections-button App-header-sections-button2">
                    Games
                </div>
                </Link>

                <Link to="/games">
                <div className="App-header-sections-button App-header-sections-button3">
                    Games
                </div>
                </Link>

                <Link to="/profile">
                <div className="App-header-sections-button App-header-sections-button4">
                    Profile
                </div>
                </Link>
            </div>  
        </header>
    )
}

export default Header;

