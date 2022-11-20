import React from 'react';
// import { Link } from 'react-router-dom';

// PROJECT CARDS
export default function ProjectNormal({ id, title, subtitle, repoLink, liveLink, mobileFeatOrStdImg, altImg, featured }) {

  if (featured === true) {

    return null;

  } else {

    return (

      <a href={repoLink} target="_blank" rel="noreferrer">
  
        <div class="work_ex_card" key={id}>
          <img class="content_images" src={require("../assets/imgs/generic_purple_262by175.jpg")} alt={altImg}/>
          <h4>
            {title}
            <br/>
            <p>{subtitle}</p>
          </h4>
        </div>
           
      </a>  
  
    );

  }

}
