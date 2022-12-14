import React from 'react';
// import { Link } from 'react-router-dom';

// PROJECT CARDS
export default function ProjectFeaturedMobile({ id, title, subtitle, repoLink, liveLink, mobileFeatOrStdImg, altImg, featured }) {

  if (featured === false) {

    return null;

  } else {
    
    return (
      
      <a id="featured_mobile" href={repoLink} target="_blank" rel="noreferrer">
        <div class="work_ex_card_feat featured_work" key={id}>
            <img class="featured_work content_images" src={require("../assets/imgs/generic_purple_262by175.jpg")}/>
            <h4>{title}
                <br/>
                <p>{subtitle}</p>
            </h4>
        </div>
      </a>
  
    );

  }

}
