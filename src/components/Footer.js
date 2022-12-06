import React from 'react';
// import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <>
      <div class="footer">
        <div id="footer-content">
          <ul id="footer-links-div">

            <li>
              <a href="https://stackoverflow.com/users/19119166/abigail-douglas" target="_blank" rel="noreferrer">
                <img class="contact_icons" src={require("../assets/imgs/_icons/stackoverflow_icon.png")} alt="Stack Overflow Logo"/>
              </a>
            </li>
            
            <li>
              <a href="https://github.com/AbbyDabbyDooDoesGitHub" target="_blank" rel="noreferrer">
                <img class="contact_icons" src={require("../assets/imgs/_icons/logo_github.png")} alt="GitHub Logo"/>
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/abigailcdouglas/" target="_blank" rel="noreferrer">
                <img class="contact_icons" src={require("../assets/imgs/_icons/logo_linkedin.png")} alt="LinkedIn Logo"/>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </>

  );

};

export default Footer;
