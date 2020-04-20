import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle} width={`${rhythm(24)}`} padding="24px 0">
      <SEO title="404: Not Found" />
      <div style={{margin: '0 auto', textAlign: 'center'}}>
        <h1 style={{
          fontSize: '10rem'
        }}>404</h1>
        <p>Ah, how classic. Seems as if the page you've tried to access doesn't exist.
          <br></br>
        Let's bring you{` `}<Link to={`/`}>back to reality</Link>.</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
