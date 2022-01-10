import React, {useEffect} from 'react';
import logo from '../../assets/ran-images/Logo.png'
function Nav() {
    return (
        <header>
            <img src={logo} alt='My logo'/>
            <a href='#about'>About Me</a>
            <a href='#portfolio'>Portfolio</a>
            <a href='#contact'>Contact Me</a>
            <a href='#resume'>Resume</a>
        </header>
    )
}

export default Nav;