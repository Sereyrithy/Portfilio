import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <>
      <Navbar/>

       <main className='main'>
          <Home/>
          <About/>
       </main>
    </>
  );
}

export default App;
