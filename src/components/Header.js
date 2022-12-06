import React from 'react';
// import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <>
      <div id="header">

        <a id="HomeLink" href="/">
          <h1>Abigail Douglas</h1>
        </a>

        <br  class="header_mobile_br"/>
        <br  class="header_mobile_br"/>

        <nav class="head_nav">
          <ul>
            <li><a href="/#About_Me">About Me</a></li>
            <p>|</p>
            <li><a href="/#Resume">Resume</a></li>
            <p>|</p>
            <li><a href="/#Contact_Me">Contact Me</a></li>
            <p>|</p>
            <li><a href="/Portfolio">My Work</a></li>
          </ul>
        </nav>
      </div> 

      <subheader>
        <div>
          <h2>Professional Programming Portfolio</h2>
        </div>
      </subheader>
  </>

  );

};

export default Header;
