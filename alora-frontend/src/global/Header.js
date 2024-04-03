import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import "../styles/index.css";
import "../styles/App.css";

import home_text from "../images/Home_Text.png";
import home_tree from "../images/Home_Tree.png";

const Header = () => {
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

  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : error ? (
        <div>error</div>
      ) : (
        <header className="App-header border-b-4 border-gray-500">
          <div className="max-w-screen-x1">
            {accountInfo && accountInfo.account_type === 'S' &&
              <div className="flex h-20 items-center justify-between">
                {/* Alora logo */}
                <div className="App-header-home flex items-center">
                  <Link to="/progress">
                    <img
                      alt="alora finance logo"
                      src={home_tree}
                      width="70px"
                      height="60px"
                      style={{ marginRight: "3px" }}
                    />
                  </Link>
                  <Link to="/progress">
                    <img
                      alt="alora finance logo"
                      src={home_text}
                      width="150px"
                      height="60px"
                    />
                  </Link>
                </div>

                {/*Page links*/}
                <ul className="App-header-sections flex tems-center">
                  <li>
                    <Link to="/lessons/main">
                      {/* Sadie needs to fix this for all of the buttons */}
                      <button
                        className={`sm:flex App-header-sections-button App-header-sections-button1 ${location.pathname === "/lessons/main" ? "button1-active" : ""
                          }`}
                      >
                        Lessons
                      </button>
                    </Link>
                  </li>

                  <li>
                    <Link to="/games">
                      <button
                        className={`sm:flex App-header-sections-button App-header-sections-button2 ${location.pathname === "/games" ? "button2-active" : ""
                          }`}
                      >
                        Games
                      </button>
                    </Link>
                  </li>

                  <li>
                    <Link to="/progress">
                      <button
                        className={`sm:flex App-header-sections-button App-header-sections-button3 ${location.pathname === "/progress" ? "button3-active" : ""
                          }`}
                      >
                        Progress
                      </button>
                    </Link>
                  </li>

                  <li>
                    <Link to="/profile">
                      <button
                        className={`sm:flex App-header-sections-button App-header-sections-button4 ${location.pathname === "/profile" ? "button4-active" : ""
                          }`}
                      >
                        Profile
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            }
            {accountInfo && accountInfo.account_type === 'T' &&
              <div className="flex h-20 items-center justify-between">
                {/* Alora logo */}
                <div className="App-header-home flex items-center">
                  <Link to="/teacher/class">
                    <img
                      alt="alora finance logo"
                      src={home_tree}
                      width="70px"
                      height="60px"
                      style={{ marginRight: "3px" }}
                    />
                  </Link>
                  <Link to="/teacher/class">
                    <img
                      alt="alora finance logo"
                      src={home_text}
                      width="150px"
                      height="60px"
                    />
                  </Link>
                </div>

                {/*Page links*/}
                <ul className="App-header-sections flex tems-center">
                  <li>
                    <Link to="/teacher/lessons/main">
                      <button
                        className={`sm:flex App-header-sections-button App-header-sections-button1 ${location.pathname === "/teacher/lessons/main" ? "button1-active" : ""
                          }`}
                      >
                        Lessons
                      </button>
                    </Link>
                  </li>

                  <li>
                    <Link to="/teacher/class">
                      <button
                        className={`sm:flex App-header-sections-button App-header-sections-button2 ${location.pathname === "/teacher/class" ? "button2-active" : ""
                          }`}
                      >
                        Class
                      </button>
                    </Link>
                  </li>

                  {/* <li>
              <Link to="/teacher/profile">
                <button
                  className={`sm:flex App-header-sections-button App-header-sections-button3 ${
                    location.pathname === "/teacher/profile" ? "button3-active" : ""
                  }`}
                >
                  Profile
                </button>
              </Link>
            </li> */}

                  <li>
                    <Link to="/teacher/profile">
                      <button
                        className={`sm:flex App-header-sections-button App-header-sections-button4 ${location.pathname === "/teacher/profile" ? "button4-active" : ""
                          }`}
                      >
                        Profile
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            }
          </div>
        </header>
      )}
    </>
  )
}

export default Header;
