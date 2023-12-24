import React from 'react';
import { Link } from "react-router-dom";
import '../styles/index.css';
import '../styles/App.css';
import App from '../App';

import home_logo from '../images/Home_Logo.png';

const Header = () => {
    return (
        <header className="App-header">
            {/* LOGO */}

            <div className="app-header-home">
                <Link to="/">
                    {/* LOGO */}
                    <img alt="alora finance logo" src={home_logo} className="App-header-home-logo" width="260px" height='60px'/>
                    
                </Link>
                {/* <a onClick={()=>void 0}><img src={home_logo} className="App-header-home-logo" alt='' width="260px" height='60px'/></a> */}
            </div>

            {/* LINKS */}
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