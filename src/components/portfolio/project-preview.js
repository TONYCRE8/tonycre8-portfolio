import React from 'react'
import { link, graphql, useStaticQuery } from 'gatsby'
import ProjectItems from "./project-items"

export default function ProjectPreview() {
    const data = useStaticQuery(graphql`
    {
        allProjectsJson(sort: {fields: [date], order: DESC } limit: 3) {
            edges {
              node {
                title
                slug
                description
                image {
                    childImageSharp {
                        sizes(maxWidth: 630) {
                          ...GatsbyImageSharpSizes
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
            {projects.map(({ node: project }) => {
                const title=project.title;
                const description=project.description;
                const slug=project.slug;
                const imageData=project.image.childImageSharp.sizes;
    
                return(
                <ProjectItems 
                title={title}
                description={description}
                slug={slug}
                imageData={imageData}/>
                )
            })}
        </>
    )
}
