import React from 'react'
import {Link} from 'gatsby';
import Image from 'gatsby-image'
import "../../styles/projects.css"

export default function ProjectItems({ slug, imageData, title, description}) {
    return (
        <div className="project-item">
            <Link to={`${slug}`}>
                <Image sizes={imageData} alt={title} className="project-image"/>
            </Link>
            <div className="project-info">
                <h2 className="project-title">
                    <Link to={`${slug}`}>{title}</Link>
                </h2>
                <p className="project-description">{description}</p>
                <p className="project-link"><Link to={`${slug}`}>View project &rarr;</Link></p>
            </div>
        </div>
    )
}
