import React from 'react';
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
                <div className="App-header-sections-button App-header-sections-button1">
                    <a onClick={()=>void 0}>lessons</a> {/*link to another page*/}
                </div>
                
                <div className="App-header-sections-button App-header-sections-button2">
                    <a onClick={()=>void 0}>games</a>
                </div>

                <div className="App-header-sections-button App-header-sections-button3">
                    <a onClick={()=>void 0}>games</a>
                </div>

                <div className="App-header-sections-button App-header-sections-button4">
                    <a onClick={()=>void 0}>profile</a>
                </div>
            </div>
        </header>
    )
}

export default Header;

