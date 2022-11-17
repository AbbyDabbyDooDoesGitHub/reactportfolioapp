import React from 'react';
// import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <>
      <header>
        <h1>Abigail Douglas</h1>

        <br  class="header_mobile_br"/>
        <br  class="header_mobile_br"/>

        <nav class="head_nav">
          <ul>
            <li><a href="#About_Me">About Me</a></li>
            <p>|</p>
            <li><a href="#Work">My Work</a></li>
            <p>|</p>
            <li><a href="#Contact_Me">Contact Me</a></li>
            <p>|</p>
            <li><a href="./assets/downloads/ADouglas_LinkedIn_Resume.pdf" download>Resume</a></li>
          </ul>
        </nav>
      </header> 

      <subheader>
        <div>
          <h2>Professional Programming Portfolio</h2>
        </div>
      </subheader>
  </>

  );

};

export default Header;
