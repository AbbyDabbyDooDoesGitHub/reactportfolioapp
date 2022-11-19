import React from 'react';
// import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <>
      <div class="footer">
        <div id="footer-content">
          <ul id="footer-links-div">
            
            <li>
              <a href="https://github.com/AbbyDabbyDooDoesGitHub" target="_blank" rel="noreferrer">
                <img class="contact_icons" src={require("../assets/imgs/_icons/logo_github.png")} alt="GitHub Logo Icon"/>
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/abigailcdouglas/" target="_blank" rel="noreferrer">
                <img class="contact_icons" src={require("../assets/imgs/_icons/logo_linkedin.png")} alt="LinkedIn Logo Icon"/>
              </a>
            </li>

            <li>
              <a href="mailto: ItsAbigailDouglas@gmail.com">
                <img class="contact_icons" src={require("../assets/imgs/_icons/logo_gmail.png")} alt="Gmail Logo Icon"/>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </>

  );

};

export default Footer;
