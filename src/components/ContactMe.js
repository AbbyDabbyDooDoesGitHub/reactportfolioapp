import React from 'react';
// import { Link } from 'react-router-dom';

const ContactMeComp = () => {

  return (
    <>

        <div id="Contact_Me" class="section">
            <div>
                <h3 class="content_heading">Contact Me</h3>
            </div>
    
            <div class="content">
                <div id="Contact_Me_Content">

                    <div class="row" id="contactForm-div">
                        <form class="col s12">

                            <div class="contactForm-info-div row">
                                <label for="contact_name">NAME</label>
                                <div class="input-field col s12">
                                    <input placeholder="John Doe" id="contact_name" type="text" class="validate"/>
                                </div>
                            </div>

                            <div class="contactForm-info-div row">
                                <label for="contact_email">EMAIL</label>
                                <div class="input-field col s12">
                                    <input placeholder="jDoe@email.com" id="contact_email" type="email" class="validate"/>
                                </div>
                            </div>

                            <div class="contactForm-info-div row">
                                <label for="contact_message">MESSAGE</label>
                                <div  class="input-field col s12">
                                    <input placeholder="Let's connect" id="contact_message" type="text"/>
                                </div>
                            </div>

                        </form>

                        <div id="contactForm-footerDiv">

                            <a id="contact-submitBtn" href="/ContactMe">SUBMIT</a>

                        </div>

                    </div>
        
                </div>
            </div>
    
        </div>
    </>

  );

};

export default ContactMeComp;
