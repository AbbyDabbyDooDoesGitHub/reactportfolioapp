import React from 'react';

import AboutMe from '../components/AboutMe';
import ContactMeComp from '../components/ContactMe';
import Resume from '../components/Resume';

export default function Home() {
  return (
    <React.Fragment>

        <br/>

        <main>

          <AboutMe />

          <Resume />

          <ContactMeComp />

        </main>

        <br/>
        <br/>


    </React.Fragment>
  )
}
