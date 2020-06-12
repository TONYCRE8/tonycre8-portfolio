import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle} width={`100%`} padding="24px 0">
      <SEO title="404: Not Found"
      description="Looks like we encountered an issue! Best find a way back to where we came from, huh?"/>
      <div className="not-found">
      <div className="not-found-eyes">
            👀
        </div>
        <div className="inner-element">
          <div className="title">
            <h1>404</h1>
          </div>
          <p>Hm, ending up somewhere you shouldn't be? Kind of suspicous.
            <br></br>
          Let's get you{` `}<Link to={`/`}>back on track</Link>.</p>
        </div>
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
