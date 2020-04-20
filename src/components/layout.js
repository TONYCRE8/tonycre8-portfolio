import React, {useState, useEffect} from "react"
import {Link} from 'gatsby'
import Nav from './nav'
import Logo from '../../content/assets/logo.png'
import themes from '../styles/themes'

import { rhythm, scale } from "../utils/typography"

const Layout = ({ title, children, width, padding, right, left }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const [theme, setTheme] = useState('pink')

  const handleThemeChange = e => {
    localStorage.setItem('theme', e.target.value)
    setTheme(e.target.value)
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')

    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])

  return (
    <>
    <style key={`style-${theme}`}>
    {`
      :root {
        --primary: ${themes[theme].primary};
        --secondary: ${themes[theme].secondary};
        --dark: ${themes[theme].dark};
      }
    `}
    </style>
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
            <div className="theme-select">
              <p style={{width: "60px", margin: 0}}>Themes:</p>
              <button
                className="theme-colour"
                name="theme-colour"
                value="pink"
                onClick={handleThemeChange}
                alt="pink"
                style={{
                  backgroundColor: '#EDC4E6'
                }}
              />
              <button
                className="theme-colour"
                name="theme-colour"
                value="purple"
                onClick={handleThemeChange}
                alt="purple"
                style={{
                  backgroundColor: '#D2CAF7'
                }}
              />
              <button
                className="theme-colour"
                name="theme-colour"
                value="blue"
                onClick={handleThemeChange}
                alt="blue"
                style={{
                  backgroundColor: '#88CCF1'
                }}
              />  
              <button
                className="theme-colour"
                name="theme-colour"
                value="yellow"
                onClick={handleThemeChange}
                alt="yellow"
                style={{
                  backgroundColor: '#F8E8B9'
                }}
              />      
            </div>
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
            TONYCRE8© {new Date().getFullYear()}, Built with {` `}
            <a id="link" href="https://www.gatsbyjs.org">Gatsby</a><br></br>
            View this project on {` `}
            <a id="link" href="https://www.gatsbyjs.org">GitHub</a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout
