import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

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
              path="/Portfolio" 
              element={<Portfolio />}
            />

          </Routes>
        
        </div>

        <Footer />

      </Router>

    </div>  );
}

export default App;
