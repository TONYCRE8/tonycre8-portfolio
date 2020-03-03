import React from 'react'
import {Link} from 'gatsby'

export default function Nav() {
    return (
        <div className="nav">
            <Link className="nav-item" id="index" 
            to={`/`}>
                Home
            </Link>
            <Link className="nav-item" id="about"
            to={`./about`}>
                About
            </Link>
            <Link className="nav-item" id="blog" 
            to={`/blog`}>
                Blog
            </Link>
            <Link className="nav-item" id="projects" 
            to={`/projects`}>
                Projects
            </Link>
        </div>
    )
}
