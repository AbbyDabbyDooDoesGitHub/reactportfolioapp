import React from 'react';
// import { Link } from 'react-router-dom';

const ContactMe = () => {

  return (
    <>
        <div id="Resume" class="section">
            <div>
                <h3 class="content_heading">Contact Me</h3>
            </div>
    
            <div class="content">
                <div id="Contact_Me_Content">
                    <ul class="Contact_Me_Content">
                        <li class="Contact_Me_Content"><a href="https://github.com/AbbyDabbyDooDoesGitHub" target="_blank" rel="noreferrer">
                            <img class="contact_icons" src={require("../assets/imgs/_icons/logo_github.png")} alt="GitHub Logo Icon"/>
                        </a></li>

                        <li class="Contact_Me_Content"><a href="https://www.linkedin.com/in/abigailcdouglas/" target="_blank" rel="noreferrer">
                            <img class="contact_icons" src={require("../assets/imgs/_icons/logo_linkedin.png")} alt="LinkedIn Logo Icon"/>
                        </a></li>

                        <li class="Contact_Me_Content"><a href="mailto: ItsAbigailDouglas@gmail.com">
                            <img class="contact_icons" src={require("../assets/imgs/_icons/logo_gmail.png")} alt="Gmail Logo Icon"/>
                        </a></li>

                    </ul>
                </div>
            </div>
    
        </div>
    </>

  );

};

export default ContactMe;
