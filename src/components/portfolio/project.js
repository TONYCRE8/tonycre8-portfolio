import React from 'react'
import { Link } from 'gatsby';
import Image from 'gatsby-image'
import "../../styles/projects.css"

const Project = ({ imageData, title, description, url }) => (
    <div className="project-item">
        <h1 className="project-title">{title}
        </h1>
        <Image sizes={imageData} alt={title} className="project-image"/>
        <p className="project-description">{description}</p>
        <p className="project-link"><Link to={url}>View live project</Link></p>
        <p><Link to="/">&larr; back to all projects</Link></p>
    </div>
);

export default Project;