import React from 'react';

import AboutMe from '../components/AboutMe'
import Project from '../components/Project'
import ContactMe from '../components/ContactMe'
import Resume from '../components/Resume'

export default function Home() {
  return (
    <React.Fragment>

        <br/>

        <main>

            <AboutMe />
            
            <br/>

            <Project />
            
            <br/>

            <ContactMe />

            <br/>

            <Resume />

        </main>

        <br/>
        <br/>


    </React.Fragment>
  )
}
