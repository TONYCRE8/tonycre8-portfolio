import React from 'react'
import { Link } from 'gatsby';
import Image from 'gatsby-image'

const Project = ({ imageData, title, description, url }) => (
    <div className="project">
        <Image fluid={imageData} alt={title} className="project-image" style={{
            width: 630,
            height: "auto"
        }}/>
        <h1 className="project-title">{title}
        </h1>
        <p className="project-description">{description}</p>
        <a href={url} className="project-link">View live project</a>
        <p><Link to="/projects">&larr; back to all projects</Link></p>
    </div>
);

export default Project;