import React, { useState, useEffect } from "react"
import Nav from "./nav"
import Logo from "../../content/assets/logo.png"
import themes from "../styles/themes"

const Layout = ({ title, children, width, padding, right, left }) => {
  const [theme, setTheme] = useState("pink")

  const handleThemeChange = e => {
    localStorage.setItem("theme", e.target.value)
    setTheme(e.target.value)
  }

  useEffect(() => {
    const localTheme = localStorage.getItem("theme")

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
        --shade: ${themes[theme].shade};
        --dark: ${themes[theme].dark};
        --image: ${themes[theme].image};
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
            <div className="logo">
              <img src={Logo} alt="Tonycr8 Logo" />
            </div>
            <Nav />
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <div className="footer">
            TONYCRE8© {new Date().getFullYear()}, Built with {` `}
            <a id="link" href="https://www.gatsbyjs.org">
              Gatsby
            </a>
            <br></br>
            View this project on {` `}
            <a id="link" href="https://www.gatsbyjs.org">
              GitHub
            </a>
            <div className="theme-select">
              <p>Change the page theme:</p>
              <button
                className="theme-colour"
                name="theme-colour"
                value="pink"
                onClick={handleThemeChange}
                alt="pink"
                style={{
                  backgroundColor: "#EDC4E6",
                }}
              />
              <button
                className="theme-colour"
                name="theme-colour"
                value="purple"
                onClick={handleThemeChange}
                alt="purple"
                style={{
                  backgroundColor: "#D2CAF7",
                }}
              />
              <button
                className="theme-colour"
                name="theme-colour"
                value="blue"
                onClick={handleThemeChange}
                alt="blue"
                style={{
                  backgroundColor: "#88CCF1",
                }}
              />
              <button
                className="theme-colour"
                name="theme-colour"
                value="yellow"
                onClick={handleThemeChange}
                alt="yellow"
                style={{
                  backgroundColor: "#F8E8B9",
                }}
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout
