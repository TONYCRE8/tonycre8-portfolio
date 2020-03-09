import React from 'react'
import TestimonialView from '../components/about/banner'
import {Link} from 'gatsby'
import Layout from "../components/layout"

import { rhythm } from "../utils/typography"

export default function About() {

    return (
        <Layout width={`${rhythm(24)}`} right="auto" left="auto">
            <h1 style={{marginBottom: 0, textAlign: "center"}}>Testimonials</h1>
            <div class="testimonial-view">
                <TestimonialView/>
            </div>
        </Layout>
    )
}
