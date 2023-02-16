import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/index.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Project from './components/Project';
import { PortProvider } from './context';
import Resume from './components/Resume';



function App() {
  return (
    <div className="App">
      <PortProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route  path="/projects" element={<Projects />} />
            <Route  path="/projects/:slug" element={<Project />} />
            <Route  path="/timeline" element={<Timeline />} />
            <Route  path="/resume" element={<Resume />} />
          </Routes>
          <Footer />
      </PortProvider>
    </div>
  );
}

export default App;
