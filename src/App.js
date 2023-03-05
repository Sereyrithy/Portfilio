import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <Navbar/>

       <main className='main'>
          <Home/>
       </main>
    </>
  );
}

export default App;
