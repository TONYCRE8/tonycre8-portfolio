import React from 'react'
import { Link } from "gatsby"

export default function Header( {title} ) {
    return (
        <header className="header">
            <div className="inner-element">
                <Link className="nav-button" id="title"
                style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                }}
                to={`/`}
                >
                {title}
                </Link>
                <Link className="nav-button" id="blog" to={`/blog`}>blog</Link>
            </div>
        </header>
    )
}
