import React from 'react';
// import { Link } from 'react-router-dom';

const Resume = () => {

  return (
    <>
        <div id="Resume" class="section">
            <div>
                <h3 class="content_heading">
                    
                    Resume

                    {/* <a id="resume-download" href="../assets/downloads/ADouglas_LinkedIn_Resume.pdf" download>Download Here</a> */}
                
                </h3>
            </div>
    
            <div class="content" id="resume-content">

                <a id='resume-left' href="../assets/downloads/ADouglas_LinkedIn_Resume.pdf" download>

                    <div class="work_ex_card">
                        <img id="resume-download-icon" src={require("../assets/imgs/_icons/download-document.png")} alt="Download Document Icon by joeartcon from NounProject.com"/>
                    </div>

                    <h4 id="resume-download">
                        Full Resume Download
                    </h4>
                    
                </a>  

                <div id='resume-right'>

                    <h4 id='resume-right-h4'>Relevant Software Experience</h4>

                    {/* <ul>
                        <li>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Git</p>
                            <p>JavaScript</p>
                            <p>JSON</p>
                            <p>jQuery</p>
                            <p>Object Oriented Programming</p>
                            <p>MVC Paradigm</p>
                            <p>Integrated Testing</p>
                            <p>PWAs</p>
                            <p>MERN Stack</p>
                            <p>NoSQL</p>

                        </li>
                    </ul>


                    <h4 id='resume-right-h4'>Specific Tools</h4> */}
                    <ul>

                        <li>
                            <a class="skill-links" href="https://jquery.com/" target="_blank" rel="noreferrer">
                                <div className='skill-content-div'>
 
                                    <div>
                                        <img class="skill_icons" src={require("../assets/imgs/_icons/jquery.png")} alt="jQuery Logo"/>
                                    </div> 

                                    <h5 class="skill_label">
                                        jQuery
                                    </h5>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a class="skill-links" href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
                                <div className='skill-content-div'>
 
                                    <div>
                                        <img class="skill_icons" src={require("../assets/imgs/_icons/bootstrap.png")} alt="Bootstrap Logo"/>
                                    </div> 

                                    <h5 class="skill_label">
                                        Bootstrap
                                    </h5>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a class="skill-links" href="https://materializecss.com/about.html" target="_blank" rel="noreferrer">
                                <div className='skill-content-div'>
 
                                    <div>
                                        <img class="skill_icons" src={require("../assets/imgs/_icons/materialize.png")} alt="Materialize Logo"/>
                                    </div> 

                                    <h5 class="skill_label">
                                        Materialize
                                    </h5>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a class="skill-links" href="https://nodejs.org/en/about/" target="_blank" rel="noreferrer">
                                <div className='skill-content-div'>
 
                                    <div>
                                        <img class="skill_icons" src={require("../assets/imgs/_icons/node-js.png")} alt="Node.js Logo"/>
                                    </div> 

                                    <h5 class="skill_label">
                                        Node.js
                                    </h5>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a class="skill-links" href="https://expressjs.com/" target="_blank" rel="noreferrer">
                                <div className='skill-content-div'>
 
                                    <div>
                                        <img class="skill_icons" src={require("../assets/imgs/_icons/express.png")} alt="Express.js Logo"/>
                                    </div> 

                                    <h5 class="skill_label">
                                        Express.js
                                    </h5>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a class="skill-links" href="https://handlebarsjs.com/" target="_blank" rel="noreferrer">
                                <div className='skill-content-div'>
 
                                    <div>
                                        <img class="skill_icons" src={require("../assets/imgs/_icons/handlebars.png")} alt="Handlebars Logo"/>
                                    </div> 

                                    <h5 class="skill_label">
                                        Handlebars
                                    </h5>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a class="skill-links" href="https://sequelize.org/" target="_blank" rel="noreferrer">
                                <div className='skill-content-div'>
 
                                    <div>
                                        <img class="skill_icons" src={require("../assets/imgs/_icons/sequelize.png")} alt="Sequelize Logo"/>
                                    </div> 

                                    <h5 class="skill_label">
                                        Sequelize
                                    </h5>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a class="skill-links" href="https://jestjs.io/" target="_blank" rel="noreferrer">
                                <div className='skill-content-div'>
 
                                    <div>
                                        <img class="skill_icons" src={require("../assets/imgs/_icons/jest.png")} alt="Jest Logo"/>
                                    </div> 

                                    <h5 class="skill_label">
                                        Jest
                                    </h5>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a class="skill-links" href="https://reactjs.org/" target="_blank" rel="noreferrer">
                                <div className='skill-content-div'>
 
                                    <div>
                                        <img class="skill_icons" src={require("../assets/imgs/_icons/react.png")} alt="React.js Logo"/>
                                    </div> 

                                    <h5 class="skill_label">
                                        React.js
                                    </h5>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a class="skill-links" href="https://www.npmjs.com/package/inquirer" target="_blank" rel="noreferrer">
                                <div className='skill-content-div'>
 
                                    <div>
                                        <img class="skill_icons" src={require("../assets/imgs/_icons/inquirer-js.PNG")} alt="Inquirer.js Logo"/>
                                    </div> 

                                    <h5 class="skill_label">
                                        Inquirer.js
                                    </h5>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a class="skill-links" href="https://www.heroku.com/" target="_blank" rel="noreferrer">
                                <div className='skill-content-div'>
 
                                    <div>
                                        <img class="skill_icons" src={require("../assets/imgs/_icons/heroku.png")} alt="Heroku Logo"/>
                                    </div> 

                                    <h5 class="skill_label">
                                        Heroku
                                    </h5>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a class="skill-links" href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
                                <div className='skill-content-div'>
 
                                    <div>
                                        <img class="skill_icons" src={require("../assets/imgs/_icons/mongoDB.png")} alt="MongoDB Logo"/>
                                    </div> 

                                    <h5 class="skill_label">
                                        MongoDB
                                    </h5>
                                </div>
                            </a>
                        </li>


                    </ul>
                </div>
            </div>
    
        </div>
    </>

  );

};

export default Resume;
