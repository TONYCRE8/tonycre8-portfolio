import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import gsap from 'gsap'

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/blog-article.css"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  useEffect(() => {
    gsap.fromTo("#thumb", .4, {opacity: 0, y: -300}, {opacity: 1, y: 0})
    gsap.fromTo("#head", .4, {opacity: 0, y: -200}, {opacity: 1, y: 0})
    gsap.fromTo(".back", .6, {opacity: 0, x: 300}, {opacity: 1, x: 0, delay: 1})
  })

  return (
    <Layout width={"100%"} left={"auto"} right={"auto"}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        thumb={post.frontmatter.thumbnail.childImageSharp.sizes.src}
      />
      <Link className="button back" to={`/blog`}>&larr; Back</Link>
      <article id="article">
        <div id="thumb">
          <Img sizes={post.frontmatter.thumbnail.childImageSharp.sizes}></Img>
        </div>
        <header id="head">
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          {post.frontmatter.tags.map(tag => (
            <small>#{tag} </small>
          ))}
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul>
          <li>
            {previous && (
              <Link
                to={`blog${previous.fields.slug}`}
                rel="prev"
                id="prev-post"
              >
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
