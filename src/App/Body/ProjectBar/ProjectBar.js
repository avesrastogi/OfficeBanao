import React from 'react'
import './ProjectBar.css'
import Navbar from 'react-bootstrap/Navbar';

//{ /*<nav class="bg-dark navbar-light navbar" className="header"> </nav>*/}
function ProjectBar() {
    return(
        <>
        <Navbar className="color-nav">
            <div className="title">
                <label id="box">Project</label>
            </div>
        </Navbar>

        </>

        

        
    )
}

export default ProjectBar