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
                        fluid(maxWidth: 400) {
                          ...GatsbyImageSharpFluid
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
    const imageData = project.image.childImageSharp.fluid;
    const url = project.url;

    return (
        <Layout title="TONYCRE8">
            <Project
                title={title}
                description={description}
                imageData={imageData}
                url={url}
            />
        </Layout>
    )
}

export default ProjectTemplate;