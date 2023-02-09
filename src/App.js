import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './styles/index.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<About />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
