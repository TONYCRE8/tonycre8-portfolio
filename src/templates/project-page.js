import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Project from '../components/portfolio/project'

export const query = graphql`
    query ($slug: String!) {
        projectsJson(slug: { eq: $slug }) {
                title
                description
                url
                image {
                    childImageSharp {
                        sizes(maxWidth: 630) {
                        ...GatsbyImageSharpSizes
                        }
                    }
            }
        }
    }
    `

const ProjectTemplate = ({ data }) => {
    const project = data.projectsJson;
    const title = project.title;
    const description = project.description;
    const imageData = project.image.childImageSharp.sizes;
    const url = project.url;

    return (
        <Layout>
            <Project>
                title={title}
                description={description}
                imageData={imageData}
                url={url}
            </Project>
        </Layout>
    )
}

export default ProjectTemplate;