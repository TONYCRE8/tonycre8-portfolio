import React, {useState} from "react"
import {Link} from 'gatsby'
import Nav from './nav'
import Logo from '../../content/assets/logo.png'

import { rhythm, scale } from "../utils/typography"

const Layout = ({ title, children, width, padding, right, left }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div
      style={{
        marginLeft: `${left}`,
        marginRight: `${right}`,
        maxWidth: `${width}`,
        padding: `${padding}`,
        paddingTop: "80px",
        paddingBottom: "0px",
      }}
    >
      <header className="header">
        <div className="inner-element">
            <Link to={`/`} style={{
                display: "block",
                boxShadow: "none",
                textAlign: "center"
                }}>
                <img src={Logo} style={{
                    height: "60px",
                    marginBottom: "0"
                }}/>
            </Link>
            <Nav />
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div className="footer">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
