import React from 'react';
import './styles/index.css'
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';



function App() {



  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Home/>
        <About/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
