import React from "react"
import SEO from "../components/seo"
import ProjectPreview from "../components/portfolio/project-preview"
import Layout from "../components/layout"

export default function Projects() {
  return (
    <Layout width={"100%"} padding="24px 0" left="0" right="0">
      <SEO title="Projects"
      description="These are all the projects Tony has done thus far. Whether it be a website or application, you can find all his works here."/>
      <div className="projects-header">
        <h1>Projects</h1>
        <p>
          Have a further browse of my various works!<br></br>Whether they be
          live, on GitHub, or otherwise!
        </p>
      </div>
      <div class="project-list">
        <ProjectPreview limit={1000} />
      </div>
      <small id="teaser">More coming.. soon?</small>
    </Layout>
  )
}
