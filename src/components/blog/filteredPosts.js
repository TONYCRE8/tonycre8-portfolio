import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

export default function Posts({ data, location, style, id, filter }) {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
        <>
          {posts.map(({ node }) => {
            if (filter.toLowerCase() !== 'everything' && !node.frontmatter.tags.includes(filter)) {
              return null
            }
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug} className="post" id={id}>
                <div>
                  <Link style={{ boxShadow: `none` }} to={`blog${node.fields.slug}`}>
                    <Img sizes={node.frontmatter.thumbnail.childImageSharp.sizes} className="thumbnail"/>
                  </Link>
                </div>
                <div className="details">
                  <Link style={{ boxShadow: `none` }} to={`blog${node.fields.slug}`}>
                      <h3 className="post-title" id={id}>
                          {title}
                      </h3>
                    </Link>
                    <small className="post-date" id={id}>{node.frontmatter.date}</small>
                    <p className="post-desc" id={id}
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                    {node.frontmatter.tags.map(tag => (<small className="tag" id={id}>#{tag} </small>))}
                </div>
                <hr></hr>
              </article>
            )
          })}
        </>
    )
}