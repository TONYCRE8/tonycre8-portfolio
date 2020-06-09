import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import Testimonial from './testimonial'
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

export default function TestimonialView({offset, limit}) {

    const data = useStaticQuery(graphql`
    {
        allTestimonialsJson {
            edges {
                node {
                    name
                    position
                    description
                    image {
                        childImageSharp {
                            fluid(maxWidth: 200) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
      }      
    `)

    const testimonials = data.allTestimonialsJson.edges;

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        arrows: false,
        draggable: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    autoplaySpeed: 3000
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    draggable: true,
                }
            }
        ]
      };
    
    return (
        <Slider {...settings} className="slider">
          {testimonials.slice(offset, limit).map(({node: testimonial}) => {
              const name = testimonial.name;
              const position = testimonial.position;
              const description = testimonial.description;
              const image = testimonial.image.childImageSharp.fluid;

              return (
                <Testimonial
                    name = {name}
                    position = {position}
                    description = {description}
                    imageData = {image}/>                
              )
          })}  
        </Slider>
    )
}
