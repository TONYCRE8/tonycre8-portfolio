import React from 'react'
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import ProjectPreview from "../components/portfolio/project-preview"
import Layout from '../components/layout'
import { rhythm } from "../utils/typography"

export default function Projects() {
    return (
        <Layout width={`${rhythm(45)}`} padding="24px 0" left="0" right="0">
            <SEO title="Projects" />
            <div style={{
                margin: 0
            }}>
                <h1 style={{
                margin: 0
            }}>Projects</h1>
             <p style={{
                margin: 0
            }}>Have a further browse of my various works!<br></br>Whether they be live, on GitHub, or otherwise!</p>
            </div>
            <div class="project-list">
                <ProjectPreview limit={1000}/>
            </div>
        </Layout>
    )
}
