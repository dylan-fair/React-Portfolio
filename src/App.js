import React, {useState} from 'react';
import Nav from './componants/Nav';
import About from './componants/About';
import Contact from './componants/Contact';
import './index.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <About></About>
      <Contact></Contact>
    </div>
  );
}

export default App;
