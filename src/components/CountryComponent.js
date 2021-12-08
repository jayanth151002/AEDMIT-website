import React, { Component } from 'react'
import ReviewCarousel from './ReviewCarouselcomponent'

const CountryMain = () => {
    var sectionStyle = {
        width: "100%",
        height: "800px",
        backgroundImage: "url(./assets/images/university.jpg)",
        background: "linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(./assets/images/university.jpg)",
        backgroundSize: 'cover',
    };

    return (
        <div className="" style={sectionStyle}>
            <div className="container cmain">
                img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
                Line 53:21:   img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
                Line 181:25:  img elements
            </div>
        </div>

    )
}

const Country = (props) => {
    const country = props.country
    return (
        <div>
            <div>
                <CountryMain country={country} />
                <ReviewCarousel />
            </div>
        </div>
    )
}


export default Country