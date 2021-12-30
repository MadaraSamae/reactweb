import React, { Component } from "react";
import Logo from "./logo"
import { renderToStaticMarkup } from "react-dom/server";
import "./header.css";
class Header extends Component {
  render() {
    const svgString = encodeURIComponent(renderToStaticMarkup(<Logo/>));
    return (
      <div className="headerContent">
        <header className="App-header" style={{backgroundImage: `url("data:image/svg+xml,${svgString}")`}}>

          <div className="top1">
            <h1 className="reactTitle">React</h1>
            <p className="reactDetail">
              A JavaScript library for building user interfaces
            </p>
          </div>
          <div className="headBottom">
            <div className="button1">
              <a className="getStarted" href="#">
                Get Started
              </a>
            </div>
            <div className="button2">
              <a className="tutorial" href="#">
                Take the Tutorial
                <svg
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 4.53657 8.69699"
                  className="arrow"
                >
                  <path
                    d="
        M.18254,8.697a.18149.18149,0,0,1-.12886-.31034L4.09723,4.34126.05369.29954a.18149.18149,
        0,0,1,.2559-.2559L4.4838,4.21785a.18149.18149,0,0,1,0,.2559L.30958,8.648A.18149.18149,
        0,0,1,.18254,8.697Z
      "
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
