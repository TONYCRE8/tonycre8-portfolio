import React, {useState} from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Bio from "../components/bio"
import SEO from "../components/seo"
import Posts from "../components/blog/filteredPosts"
import Layout from "../components/layout"

import { rhythm } from "../utils/typography"
import "../styles/blog.css"

const Filter = ({data, posts}) => {

  const [currTag, setCurrTag] = useState("Everything")

  const articles = data.allMarkdownRemark.edges

  const tags = []
  const categories = posts.map(({ node }) => {
    const tag = node.frontmatter.tags.map(tag => (!tags.includes(tag) ?  tags.push(tag) : '' ))
  })
  tags.sort();

  const filterPosts = (value) => {
    setCurrTag(value)
    console.log(currTag)
  }

  return(
    <>
      <div className="filter">
        <p>"I want to read about...</p>
        <select onChange={e => filterPosts(e.target.value)}>
          <option>Everything</option>
          {tags.map(tag => (<option value={tag}>{tag}</option>))}
        </select>
        <p>"</p>
      </div>
      <Posts data={data} filter={currTag} id="blog"/>
    </>
  )
}


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout width={'100%'} right="auto" left="auto">
        <SEO title="All posts" />
        <div className="blog-page">
          <h1 style={{textAlign: 'center'}}>Blog articles</h1>
          <Filter data={data} posts={posts}/>
        </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "dddd Do of MMMM, YYYY")
            title
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
    }
  }
`