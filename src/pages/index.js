import React, {useState} from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/blog/posts"
import ProjectPreview from "../components/portfolio/project-preview"

import "../styles/index.css"
import banner from "../../content/assets/banner-1.png"
import { rhythm } from "../utils/typography"

const SiteIndex = ({ data, location}) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout width={`${rhythm(44)}`} padding="24px 0" left="0" right="0">
        <SEO title="Home page" />
        <div className="index-banner">
          <img src={banner}/>
          <h1>Anthony<br />Ingall</h1>
          <h2>Creator</h2>
          <h2>Designer</h2>
          <h2>Developer</h2>
        </div>
        <div style={{
          maxWidth: `${rhythm(36)}`,
          margin: "0 auto"
        }}>
          <h1>Portfolio Work</h1>
          <ProjectPreview limit={3}/>
          <Link
          to={`/projects`}>
            More Projects
          </Link>
        </div>
        <div style={{
          maxWidth: `${rhythm(36)}`,
          margin: "0 auto"
        }}>
          <h1>Latest Article</h1>
          <Posts data={data} id="main" />
          <Link
          to={`/blog`}>
            More Articles
          </Link>
        </div>
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
