import React, {useState} from 'react';
import Nav from './componants/Nav';
import About from './componants/About';
import Contact from './componants/Contact';
import Portfolio from './componants/Portfolio';
import Footer from './componants/Footer';
import Resume from './componants/Resume';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  return (
    <div>
      <Nav
        setCurrentPage = {setCurrentPage}
        currentPage = {currentPage}
      ></Nav>
      {currentPage === 'About' &&
        <About></About>}
      {currentPage === 'Contact' &&
        <Contact></Contact>}
      {currentPage === 'Portfolio' &&
        <Portfolio></Portfolio>}
      {currentPage === 'Resume' &&
        <Resume></Resume>}
      <Footer></Footer>
    </div>
  );
}

export default App;
