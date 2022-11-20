import React from 'react';
// import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <>
      <div id="header">
        <h1>Abigail Douglas</h1>

        <br  class="header_mobile_br"/>
        <br  class="header_mobile_br"/>

        <nav class="head_nav">
          <ul>
            <li><a href="/">About Me</a></li>
            <p>|</p>
            <li><a href="/Portfolio">My Work</a></li>
            <p>|</p>
            <li><a href="/ContactMe">Contact Me</a></li>
            <p>|</p>
            <li><a href="/Resume">Resume</a></li>
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
