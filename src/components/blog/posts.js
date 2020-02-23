import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import Bio from "../bio"
import Layout from "../layout"
import SEO from "../seo"
import { rhythm } from "../../utils/typography"

export default function Posts({ data, location, style, id }) {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
        <>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug} className="post" id={id}>
                <Img sizes={node.frontmatter.thumbnail.childImageSharp.sizes} className="thumbnail"/>
                  <h3 className="post-title" id={id}>
                    <Link style={{ boxShadow: `none` }} to={`blog${node.fields.slug}`}>
                      {title}
                    </Link>
                  </h3>
                  <small className="post-date" id={id}>{node.frontmatter.date}</small>
                  <p className="post-desc" id={id}
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
              </article>
            )
          })}
        </>
    )
}