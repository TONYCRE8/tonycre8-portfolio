import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
    )
}
