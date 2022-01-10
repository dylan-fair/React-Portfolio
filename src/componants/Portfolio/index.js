import React from 'react';

function Portfolio() {
    const projects = [
        {
            title: 'Financial Assistant',
            descript: "HTML, CSS, JS, and Server Side Api's",
            github: 'https://github.com/dylan-fair/finance-assistant',
            link: 'https://dylan-fair.github.io/finance-assistant/'
        },
        {
            title: 'Tech Blogs',
            descript: 'MVC Style, JS, Express, Sql, Sequelize, HTML, CSS and Express-session',
            github: 'https://github.com/dylan-fair/MVC-Tech-Blogz',
            link: 'https://secure-fjord-43914.herokuapp.com/'
        },
        {
            title: 'Give Away',
            descript: 'JS, MVC, Express, Session, SQl, and Sequelize',
            github: 'https://github.com/dylan-fair/give-away',
            link: 'https://safe-beyond-95818.herokuapp.com/'
        },
        {
            title: 'Run Buddy',
            descript: 'HTML5 and CSS',
            github: 'https://github.com/dylan-fair/run-buddy',
            link: 'https://dylan-fair.github.io/run-buddy/'
        },
        {
            title: 'Food Festival',
            descript: 'JS, HTML, Node.js, CSS, Webpack, Cache, and PWA',
            github: 'https://github.com/dylan-fair/food-festival',
            link: 'https://dylan-fair.github.io/food-festival/'
        },
        {
            title: 'My Portfolio',
            descript: 'HTML and CSS',
            github: 'https://github.com/dylan-fair/Portfoliov2',
            link: 'https://dylanfair.com'
        },
    ]
    return (
        <div className='projects'>
            <h2>My Porjects</h2>
            <ul>
                {projects.map((current, i) => {
                    {console.log(i)}
                    <li>
                        <img src={require(`../../assets/project-images/0${i}.jpg`)}/>
                        <div className='text-inside'>{current.title}</div>
                        <div className='behind'>
                            <div className='behind-text'>{current.descript}</div>
                            <a className='link' href={current.link} target='_blank'>Visit Website</a>
                            <a className='link' href={current.github} target='_blank'>Visit Repo</a>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Portfolio;