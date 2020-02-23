import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        paddingTop: "80px",
        paddingBottom: "0px",
      }}
    >
      <Header title={title}/>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
