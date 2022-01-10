import React from 'react';
import avatar from '../../assets/ran-images/AvatarMaker.png';

function About () {
    return (
        <section className='about'>
            <img src={avatar} alt='My Avatar' />
            <h1>Dylan Fair</h1>
            <p>
                I began my journey into the world of coding in 2020 taking a c++ class in 
                college. That is where I fell in love with the world of programming.
                As an eager learner and natural “helper”, I am excited to use my technical skills
                and collaborative nature to write cleaner code, identify errors, and help your team 
                to continue to develop innovative, and exciting work.
            </p>
        </section>
    )
}

export default About;