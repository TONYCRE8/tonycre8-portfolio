import React from 'react'
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import ProjectPreview from "../components/portfolio/project-preview"
import Layout from '../components/layout'
import { rhythm } from "../utils/typography"

export default function Projects() {
    return (
        <Layout width={`${rhythm(32)}`}>
            <SEO title="Projects" />
            <ProjectPreview limit={1000}/>
        </Layout>
    )
}
