import React from "react";
import resume from '../../assets/Resume/myresume.pdf'
function Resume () {
    return (
        <div className="resume">
            <h1>Download my resume here!</h1>
            <a href={resume} target='_blank' ref='noreferrer'>My Resume</a>
        </div>
    )
}

export default Resume