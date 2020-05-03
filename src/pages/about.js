import React from 'react'
import TestimonialView from '../components/about/banner'
import {Link} from 'gatsby'
import Layout from "../components/layout"
import {Fade} from 'react-reveal'


import image from "../../content/assets/_MG_0393.jpg"
import { rhythm } from "../utils/typography"

export default function About() {

    return (
        <Layout width={'100%'} right="auto" left="auto">
            <Fade up>
                <div>
                    <div className="about-panel">
                        <div className="inner-element">
                            <div className="poster-image">
                                <div className="inner-element">
                                    <img src={image}/>
                                </div>
                            </div>
                            <div className="side-text">
                                <h1>About me</h1>
                                <p>Lorem ipsum nonsenese</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
            <div className="testimonial-view">
                <h1>Testimonials</h1>
                <TestimonialView/>
            </div>
        </Layout>
    )
}
