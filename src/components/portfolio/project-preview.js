import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ProjectItems from "./project-items"

export default function ProjectPreview( {limit} ) {
    const data = useStaticQuery(graphql`
    {
        allProjectsJson(sort: {fields: [date], order: DESC }) {
            edges {
              node {
                title
                url
                description
                date (formatString: "MMMM - YYYY")
                image {
                  childImageSharp {
                    fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
    }
    `)

    const projects = data.allProjectsJson.edges;
    
    return (
        <>
            {projects.slice(0, limit).map(({ node: project }) => {
                const title=project.title;
                const description=project.description;
                const date=project.date;
                const url=project.url;
                const imageData=project.image.childImageSharp.fluid;
    
                return(
                <ProjectItems 
                title={title}
                description={description}
                date={date}
                url={url}
                imageData={imageData}/>
                )
            })}
        </>
    )
}
