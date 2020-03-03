import React from 'react'
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Project from '../components/portfolio/project'
import { rhythm, scale } from "../utils/typography"


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
        <Layout width={rhythm(24)}>
            <SEO title={title} />
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