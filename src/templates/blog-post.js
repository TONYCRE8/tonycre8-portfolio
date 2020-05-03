import React from "react"
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import {Fade} from 'react-reveal'

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

import "../styles/blog-article.css"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout width={'100%'} left={'auto'} right={'auto'}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Link to={`/blog`}>&larr; Back</Link>
        <article id="article">
          <Fade up>
            <Img sizes={post.frontmatter.thumbnail.childImageSharp.sizes}></Img>
          </Fade>
          <Fade top cascade delay={800}>
            <header>
              <h1>
                {post.frontmatter.title}
              </h1>
              <p>
                {post.frontmatter.date}
              </p>
              {post.frontmatter.tags.map(tag => (<small>#{tag} </small>))}
            </header>
          </Fade>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr/>
            <footer>
              <Bio />
            </footer>  
        </article>

      <nav>
        <ul>
          <li>
            {previous && (
              <Link to={`blog${previous.fields.slug}`} rel="prev" id="prev-post">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`blog${next.fields.slug}`} rel="next" id="next-post">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "dddd Do of MMMM, YYYY")
        tags
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
`
