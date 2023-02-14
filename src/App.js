import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './styles/index.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Project from './components/Project';
import { PortProvider } from './context';



function App() {
  return (
    <div className="App">
      <PortProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/projects/:slug" element={<Project />} />
            <Route exact path="/timeline" element={<Timeline />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </PortProvider>
    </div>
  );
}

export default App;
