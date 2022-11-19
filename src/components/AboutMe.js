import React from 'react';
// import { Link } from 'react-router-dom';

const AboutMe = () => {

  return (
    <>
        <div id="About_Me" class="section">
            <div>
                <h3 class="content_heading">About Me</h3>
            </div>
    
            <div class="content" id="about_me_content">

                <p id="intro_text">


                    <img id="intro_image" src={require("../assets/imgs/My_Profile_Pic.JPG")} alt="Abigail Douglas"/>


                    <br id="about_me_mobile_br"/>

                    I am currently working as the Inventory & Systems Manager at Wallaroo's Furniture & Mattresses. This position has provided a fantastic opportunity to improve their scalable systems, as it is a rapidly expanding business. In this job, I have found myself pulling on old coding courses from college and searches on Google to assist in providing useful systems for communication at my workplace. Due to realizing the utility of further coding fluencey in my current work and future ambitions, I decided to enroll in the coding bootcamp offered by the University of Washington to improve the quality of my code. I am currently working through this bootcamp, developing the foundations and skills needed to work in a coding environment.

                    <br/><br/>
                    
                    I am always interested in trying new things and expanding my horizons. I firmly believe that anything can be accomplished with the right attitude, planning, and commitment.

                </p>
            </div>
    
        </div>
    </>

  );

};

export default AboutMe;
