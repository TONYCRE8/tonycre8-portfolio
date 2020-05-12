import React, {useState} from 'react'
import {Link} from 'gatsby'

import menu from "../../content/assets/bars.png";


export default function Nav() {
    const [hidden, setHidden] = useState(true)

    const NavToggle = () => {
        setHidden(!hidden)
    }

    return (
        <div className={hidden===false ? "nav active" : "nav"}>
            <div className="nav-toggle" onClick={() => NavToggle()}>
                <img src={menu} />
            </div>
            <div className="nav-items">
                <Link className="nav-item" id="index" 
                to={`/`}>
                    Home
                </Link>
                <Link className="nav-item" id="about"
                to={`/about`}>
                    About
                </Link>
                <Link className="nav-item" id="blog" 
                to={`/blog`}>
                    Blog
                </Link>
                <Link className="nav-item" id="projects" 
                to={`/projects`}>
                    Projects
                </Link>
            </div>
        </div>
    )
}
