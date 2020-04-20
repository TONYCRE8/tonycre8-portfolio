import React, {useState} from "react"
import { Link, graphql } from "gatsby"
import TextLoop from "react-text-loop";

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/blog/posts"
import ProjectPreview from "../components/portfolio/project-preview"
import Contact from "../components/contact/contact"

import "../styles/index.css"
import banner from "../../content/assets/banner-1.png"
import { rhythm } from "../utils/typography"

const RollText = () => {
  return (
    <h2>
      Web{' '}
      <TextLoop interval='2000'>
        <span>Developer</span>
        <span>Designer</span>
        <span>Creator</span>
      </TextLoop>
    </h2>
  )
}

const SiteIndex = ({ data, location}) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout width={`${rhythm(45)}`} padding="24px 0" left="0" right="0">
        <SEO title="Home page" />
        <div className="index-banner">
          <img src={banner}/>
          <h1>Anthony<br />Ingall</h1>
          <RollText></RollText>
        </div>
        <div className="biography"> 
            <div className="inner-element">
              <h1>WHO?</h1>
              <p>
                To be fair, that's quite a solid question to be asking at this point.
                <br></br>
                To keep a long story short, I'm working up as a Front End Web Developer in Peterborough, England.
                <br></br>
                But if you want to know more, you can take a look <Link id="link" to={'/about'}>here</Link> to find out more.
              </p>
            </div>
        </div>
        <div style={{
          maxWidth: `${rhythm(32)}`,
          margin: "0 auto",
        }}>
          <h1 //style={{
            // color: '#fff',
            // WebkitTextStroke: '1px var(--secondary)',
            // fontFamily: 'LibreFranklinExtra'
          //}}
          >Portfolio Work</h1>
          <p>Here's a couple of the projects I've worked on throughout my time, either for businesses or just small projects done for fun.</p>
          <div style={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center'
          }}>
            <ProjectPreview limit={3}/>
          </div>
          <Link class="button"
          to={`/projects`}>
            More Projects
          </Link>
        </div>
        <div style={{
          maxWidth: `${rhythm(16)}`,
          margin: "0 auto",
          textAlign: "center",
        }}>
          <h1>Latest Article</h1>
          <Posts data={data} id="main" />
          <Link class="button" style={{margin: "10px auto"}}
          to={`/blog`}>
            More Articles
          </Link>
        </div>
        <div class="contact">
          <div class="inner-element" style={{maxWidth: `${rhythm(16)}`}}>
            <h1>Contact me!</h1>
            <p>Are you slightly curious yet? Perhaps you have an idea or project that needs fulfilling? If so, <strong>get in touch!</strong></p>
            <Contact />
          </div>
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
            tags
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
