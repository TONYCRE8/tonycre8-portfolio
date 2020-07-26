import React, {useState, useRef} from 'react'
import {Link} from 'gatsby'
import gsap from 'gsap'
import logo from '../../content/assets/logo.png'

export default function Nav() {
    const [menuActive, setMenuActive] = useState(false)

    let line_1 = useRef(null)
    let line_2 = useRef(null)
    let line_3 = useRef(null)

    let nav = useRef(null)
    let navContent = useRef(null)

    const NavToggle = () => {
        if (menuActive === false) {
            gsap.to(line_1, .3, {rotation: 45, scaleX: 1.25, y: 17.5, background: '#fff', delay: .2})
            gsap.to(line_2, .3, {opacity: 0, y: 50, scaleX: .1, background: '#fff', delay: .2})
            gsap.to(line_3, .3, {rotation: -45, scaleX: 1.25, y: -17.5, background: '#fff', delay: .2})
        }
        else if (menuActive === true) {
            gsap.to(line_1, .3, {rotation: 0, scaleX: 1, y: 0, background: 'var(--dark)', delay: .3})
            gsap.to(line_2, .3, {opacity: 1, y: 0, scaleX: 1, background: 'var(--dark)', delay: .3})
            gsap.to(line_3, .3, {rotation: 0, scaleX: 1, y: 0, background: 'var(--dark)', delay: .3})
        }
        contentAnim(menuActive)
        setMenuActive(!menuActive)
    }

    const contentAnim = (active) => {
        if (active === false) {
            gsap.to(nav, 0, {scaleY: 1})
            gsap.fromTo(navContent, .4, {y: "-120vh"}, {y: 0, delay: .2, display: 'flex'})
        }
        else if (active === true) {
            gsap.to(navContent, .4, {y: "-120vh", delay: .17})
            gsap.to(nav, 0, {scaleY: 0, delay: .517})
        }
    }

    return (
        <>
            <div className="nav-toggle" onClick={() => NavToggle()}>
                <hr ref={el => {line_1 = el}} id="line1"></hr>
                <hr ref={el => {line_2 = el}} id="line2"></hr>
                <hr ref={el => {line_3 = el}} id="line3"></hr>
            </div>
            <div className={menuActive ? "active nav" : "nav"} ref={el => {nav = el}}>
                <div className="nav-content" ref={el => {navContent = el}}>
                    <img src={logo} className="logo" />
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
        </>
    )
}
