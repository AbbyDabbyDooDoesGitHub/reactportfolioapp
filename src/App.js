import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import ContactMe from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

// import components
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  
  return (
    <div className='App'>

      <Router>
        
        <div id="allButFooter-div">

          <Header />

          <Routes>

            <Route 
              path="/" 
              element={<Home />}
            />

            <Route 
              path="/ContactMe"
              element={<ContactMe />}
            />
            <Route 
              path="/Portfolio" 
              element={<Portfolio />}
            />
            <Route 
              path="/Resume" 
              element={<Resume />}
            />

          </Routes>
        
        </div>

        <Footer />

      </Router>

    </div>
  );
}

export default App;
