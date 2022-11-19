import React from 'react';
// import { Link } from 'react-router-dom';

import ProjectFeatured from '../components/Project.featured';
import ProjectFeaturedMobile from '../components/Project.featured.mobile';
import ProjectNormal from '../components/Project.normal';
import data from '../components/Project.data'

const Project = () => {

  return (
    <>
        <div id="Work" class="section">
            <div>
                <h3 class="content_heading">My Work</h3>
            </div>
    
            <div class="content">

                    {/* Go through list of projetcs and map them each to their own Project component */}
                    {data.map(({ id, title, subtitle, repoLink, liveLink, featImg, altImg, featured }) => (
                        <ProjectFeatured
                            id={id}
                            title={title}
                            subtitle={subtitle}
                            repoLink={repoLink}
                            liveLink={liveLink}
                            featImg={featImg}
                            altImg={altImg}
                            featured={featured}
                        />
                    ))}

                    {/* Go through list of projetcs and map them each to their own Project component */}
                    {data.map(({ id, title, subtitle, repoLink, liveLink, mobileFeatOrStdImg, altImg, featured }) => (
                        <ProjectFeaturedMobile
                            id={id}
                            title={title}
                            subtitle={subtitle}
                            repoLink={repoLink}
                            liveLink={liveLink}
                            mobileFeatOrStdImg={mobileFeatOrStdImg}
                            altImg={altImg}
                            featured={featured}
                        />
                    ))}

                <div class="content_image_cards">

                    {/* Go through list of projetcs and map them each to their own Project component */}
                    {data.map(({ id, title, subtitle, repoLink, liveLink, mobileFeatOrStdImg, altImg, featured }) => (
                        <ProjectNormal
                            id={id}
                            title={title}
                            subtitle={subtitle}
                            repoLink={repoLink}
                            liveLink={liveLink}
                            mobileFeatOrStdImg={mobileFeatOrStdImg}
                            altImg={altImg}
                            featured={featured}
                        />
                    ))}
    
                </div>
    
            </div>
    
        </div>
    </>

  );

};

export default Project;
