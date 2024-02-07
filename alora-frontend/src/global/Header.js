import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";
import "../styles/App.css";

import home_logo from "../images/Home_Logo.png";

const Header = () => {
  return (
    <header className="App-header border-b-4 border-gray-500">
      <div className="max-w-screen-x1 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center  justify-start">
          <div className="App-header-home flex-1 md:flex md:items-center md:gap-5">
            <Link to="/progress">
              <img
                alt="alora finance logo"
                src={home_logo}
                className="App-header-logo-width"
                width="260px"
                height="60px"
              />
            </Link>
          </div>

          <div className="App-header-sections md:flex md:items-center md:mx-12">
            <Link to="/lessons">
              <div className="hidden sm:flex App-header-sections-button App-header-sections-button1">
                Lessons
              </div>
            </Link>

            <Link to="/games">
              <div className="hidden sm:flex App-header-sections-button App-header-sections-button2">
                Games
              </div>
            </Link>

            <Link to="/progress">
              <div className="hidden sm:flex App-header-sections-button App-header-sections-button3">
                Progress
              </div>
            </Link>

            <Link to="/profile">
              <div className="hidden sm:flex App-header-sections-button App-header-sections-button4">
                Profile
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
