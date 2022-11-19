import React from 'react';
// import { Link } from 'react-router-dom';

const ContactMe = () => {

  return (
    <>
        <div id="Contact_Me" class="section">
            <div>
                <h3 class="content_heading">Contact Me</h3>
            </div>
    
            <div class="content">
                <div id="Contact_Me_Content">

                    <div class="row">
                        <form class="col s12">

                            <div class="row">
                                <div class="input-field col s12">
                                <input placeholder="Your Name Here" id="contact_name" type="text" class="validate"/>
                                <label for="contact_name">Name</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                <input id="contact_email" type="email" class="validate"/>
                                <label for="contact_email">Email</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                <input id="contact_message" type="text"/>
                                <label for="contact_message">Message</label>
                                </div>
                            </div>

                        </form>
                    </div>
        
                </div>
            </div>
    
        </div>
    </>

  );

};

export default ContactMe;
