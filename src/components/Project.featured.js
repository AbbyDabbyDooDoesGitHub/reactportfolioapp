import React from 'react';
// import { Link } from 'react-router-dom';

// PROJECT CARDS
export default function ProjectFeatured({ id, title, subtitle, repoLink, liveLink, featImg, altImg, featured }) {

  if (featured === false) {

    return null;

  } else {
    
    return (

      <a id="featured_standard" href={repoLink} target="_blank" rel="noreferrer">
        <div class="work_ex_card_feat featured_work" key={id}>
            <img class="featured_work content_images" src={require("../assets/imgs/generic_purple_361by150.jpg")} alt={altImg}/>
            <h4>{title}
                <br/>
                <p>{subtitle}</p>
            </h4>
        </div>
      </a>
      
  
    );

  }

}
