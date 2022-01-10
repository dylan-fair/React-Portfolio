import React, {useEffect} from 'react';
import logo from '../../assets/ran-images/Logo.png'
function Nav(props) {
    const {
        setCurrentPage,
        currentPage
    } = props;
    return (
        <header>
            <img src={logo} alt='My logo'/>
            <a href='#about' onClick={() => setCurrentPage('About')}>About Me</a>
            <a href='#portfolio' onClick={() => setCurrentPage('Portfolio')} >Portfolio</a>
            <a href='#contact' onClick={() => setCurrentPage('Contact')}>Contact Me</a>
            <a href='#resume'  onClick={() => setCurrentPage('Resume')}>Resume</a>
        </header>
    )
}

export default Nav;