import React from 'react'
import Image from 'gatsby-image'

import '../../styles/about.css'

export default function Testimonial({ imageData, name, position, description }) {
    return (
        <div className="testimonial">
            <Image sizes={imageData} alt={name} className="profile"/>
            <h2>{name}</h2>
            <small>{position}</small>
            <p>{description}</p>
        </div>
    )
}
