import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './styles/index.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Timeline from './components/Timeline';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/timeline" element={<Timeline />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
