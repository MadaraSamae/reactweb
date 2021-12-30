import React, { Component } from "react";
import "./Footer.css";
import facebook from "../../Assests/facebook.png";
export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-section1">
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
        </div>
        <footer>
          <div className="footer-section">
            <div>
              <div>
                <img className="facebook" src={facebook} alt="source" />
                <p className="copyright">
                  Copyright © 2021 Meta Platforms, Inc.
                </p>
              </div>
            </div>
            <div className="footer-section2">
              <div className="footer-style">
                <span className="titleName">DOCS</span>
                <a href="" className="link1">
                  Installation
                </a>
                <a href="" className="link1">
                  Main Concepts
                </a>
                <a href="" className="link1">
                  Advanced Guides
                </a>
                <a href="" className="link1">
                  API Reference
                </a>
                <a href="" className="link1">
                  Hooks
                </a>
                <a href="" className="link1">
                  Testing
                </a>
                <a href="" className="link1">
                  Contributing
                </a>
                <a href="" className="link1">
                  FAQ
                </a>
              </div>
              <div className="footer-style">
                <span className="titleName">CHANNELS</span>
                <a href="" className="link1">
                  GitHub
                </a>
                <a href="" className="link1">
                  Stack Overflow
                </a>
                <a href="" className="link1">
                  Discussion Forums
                </a>
                <a href="" className="link1">
                  Reactiflux Chat
                </a>
                <a href="" className="link1">
                  DEV Community
                </a>
                <a href="" className="link1">
                  Facebook
                </a>
                <a href="" className="link1">
                  Twitter
                </a>
              </div>
              <div className="footer-style">
                <span className="titleName">COMMUNITY</span>
                <a href="" className="link1">
                  Code of Conduct
                </a>
                <a href="" className="link1">
                  Community Resources
                </a>
              </div>
              <div className="footer-style">
                <span className="titleName">MORE</span>
                <a href="" className="link1">
                  Tutorial
                </a>
                <a href="" className="link1">
                  Blog
                </a>
                <a href="" className="link1">
                  Acknowledgements
                </a>
                <a href="" className="link1">
                  React Native
                </a>
                <a href="" className="link1">
                  Privacy
                </a>
                <a href="" className="link1">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
