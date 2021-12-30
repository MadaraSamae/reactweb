import React, { Component } from "react";
import "./navbar.css";
import logo from "../../Assests/logo192.png";
export class NavBar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav className="navBar">
            <div className="content">
              <ul className="nav">
                <li className="nav-item">
                  <img src={logo} className="reactLogo" alt="reactjslogo" />
                </li>
                <li className="nav-item">
                  <a className="reactName" href="#">
                    React
                  </a>
                </li>
              </ul>
            </div>

            <div className="content menus">
              <div className="navMenu">
                <a
                  className="navlink"
                  href="https://reactjs.org/docs/getting-started.html"
                >
                  Docs
                </a>

                <a className="navlink " href="#">
                  Tutorial
                </a>

                <a className="navlink" href="#">
                  Blog
                </a>

                <a className="navlink" href="#">
                  Community
                </a>
              </div>
            </div>
            <div className="content">
              <input className="search" type="search" placeholder="Search" />
            </div>
            <div className="content menus">
              <a className="right-link" href="">
                v17.0.2
              </a>

              <a className="right-link" href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="symbol"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "></path>
                </svg>
                {"  "}
                <span className="lang"> Languages</span>
              </a>

              <a className="right-link" href="">
                Github{" "}
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  width="15"
                  height="15"
                >
                  <path
                    fill="currentColor"
                    d="
      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
    "
                    className="squareBox"
                  ></path>
                  <polygon
                    className="squareBox"
                    fill="currentColor"
                    points="
      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
      14.9 62.8,22.9 71.5,22.9
      "
                  ></polygon>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;
