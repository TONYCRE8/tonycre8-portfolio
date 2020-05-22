import React from "react"
import { Link, graphql } from "gatsby"
import TextLoop from "react-text-loop"
import { Fade, Slide } from "react-reveal"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/blog/posts"
import ProjectPreview from "../components/portfolio/project-preview"
import Contact from "../components/contact/contact"

import "../styles/index.css"
import banner from "../../content/assets/banner-1.png"

const RollText = () => {
  return (
    <h2>
      Web{" "}
      <TextLoop interval="2000">
        <span>Developer</span>
        <span>Designer</span>
        <span>Creator</span>
      </TextLoop>
    </h2>
  )
}

const SiteIndex = ({ data, location }) => {

  return (
    <Layout width={"100%"} padding="24px 0" left="0" right="0">
      <SEO title="Home page" />
      <div className="index-banner">
        <div className="wall" id="left">
          <Slide left>
            <div className="inner-element">
              <h1>Anthony</h1>
              <h1>Ingall</h1>
            </div>
          </Slide>
        </div>
        <div className="wall" id="right">
          <div className="inner-element">
            <RollText></RollText>
          </div>
        </div>
        <Slide right>
          <img src={banner} alt="Carl Wheezer" />
        </Slide>
      </div>
      <Fade bottom duration={800}>
        <div className="who">
          <div className="who-box">
            <div className="inner-element">
              <h1>WHO?</h1>
              <p>
                To be fair, that's quite a solid question to be asking at this
                point.
                <br></br>
                To keep a long story short, I'm working up as a Front End Web
                Developer in Peterborough, England.
              </p>
            </div>
          </div>
          <div className="button">
            <Link to={"/about"}>Learn more &#8594;</Link>
          </div>
        </div>
      </Fade>
      <div className="portfolio">
        <div className="inner-element">
          <h1>Portfolio Work</h1>
          <p>
            Here's a couple of the projects I've worked on throughout my time,
            either for businesses or just small projects done for fun.
          </p>
          <div
            style={{
              display: "flex",
              flexFlow: "row",
              justifyContent: "center",
            }}
          >
            <ProjectPreview limit={3} />
          </div>
          <div className="button" id="alt">
            <Link to={"/projects"}>All work &#8594;</Link>
          </div>
        </div>
      </div>
      <div className="article">
        <div className="post">
          <Posts data={data} id="main" />
        </div>
        <div className="side-text">
          <h1>blog</h1>
          <hr></hr>
          <p>
            Did you know I write blogs? Interesting right? I've been writing
            these since the start of the year, and I upload an article at least
            once a week. Sometimes I can't upload, but these article uploads
            have been pretty consistent for the most part.
            <br></br>
            The articles I write are presented on a variety of topics. Anywhere
            from web development technologies, to fashion theory and
            application, to general lifestyle articles! If any of that sounds
            interesting to you or you're just cuirous, make sure to take a look!
          </p>
          <div className="button">
            <Link to={"/blog"}>More articles</Link>
          </div>
        </div>
      </div>
      <div class="contact">
        <div className="inner-element">
          <h1>Contact me!</h1>
          <p>
            Are you slightly curious yet? Perhaps you have an idea or project
            that needs fulfilling? If so, <strong>get in touch!</strong>
          </p>
          <Contact />
        </div>
      </div>
      <div
        style={{
          background: "var(--primary)",
          height: "390px",
          width: "100%",
        }}
      ></div>
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

    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1
    ) {
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
