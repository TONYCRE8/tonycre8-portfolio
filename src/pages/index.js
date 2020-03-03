import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/blog/posts"
import ProjectPreview from "../components/portfolio/project-preview"

import "../styles/index.css"
import { rhythm } from "../utils/typography"

const SiteIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout width={`${rhythm(42)}`}>
        <SEO title="Home page" />
        <ProjectPreview limit={3}/>
        <Link
        to={`/projects`}>
          MORE PROJECTS
        </Link>
        <Posts data={data} id="main" />
        <Link
        to={`/blog`}>
          MORE BLOGS
        </Link>
    </Layout>
  )
}

export default SiteIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
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
  }
`
