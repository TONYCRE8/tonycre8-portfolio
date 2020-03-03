import React, {useState} from "react"
import {Link} from 'gatsby'
import Nav from './nav'
import Logo from '../../content/assets/logo.png'

import { rhythm, scale } from "../utils/typography"
import randomColor from "./../utils/colourChange"

const Layout = ({ title, children, width }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  const [colors, setColors] = useState(randomColor());

  const getNewColor = function() {
    setColors(randomColor())
  }

  console.log("Colours are:", colors)

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: `${width}`,
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        paddingTop: "80px",
        paddingBottom: "0px",
      }}
    >
      <header className="header" style={{backgroundColor: colors.primary}}>
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
        <div className="footer" style={{backgroundColor: colors.dark}}>
          <button className="change-color" onClick={getNewColor}>Update color!</button>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
