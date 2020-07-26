import React from "react"
import Image from "gatsby-image"
import "../../styles/projects.css"

export default function ProjectItems({
  imageData,
  title,
  date,
  description,
  url,
}) {
  return (
    <a className="project-item" href={`${url}`}>
      <Image sizes={imageData} alt={title} className="project-image" />
      <div className="project-info">
        <h2 className="project-title">{title}</h2>
        <small className="project-date">{date}</small>
        <p className="project-description">{description}</p>
        <p className="project-link">Click to view &rarr;</p>
      </div>
    </a>
  )
}
