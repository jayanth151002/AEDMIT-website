import React, { Component } from 'react'
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'
import Carousel, { autoplayPlugin, slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import ReviewCarousel from './ReviewCarouselcomponent'
import Icon from 'react-fa'

const CountryMain = (country) => {

    var style = {
        width: "100%",
        height: "110vh",
        background: "linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(" + country.country.image + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div className="" style={style}>
            <div className="container cmain">
                <h1>{country.country.country}</h1>
                <Card className="bg-transparent col-md-6 mt-md-4 mb-md-2 border-0">
                    <CardBody>
                        <div className="row align-items-center">
                            <div className="col-md-3 col-4 text-center">
                                <img src="/assets/images/engineering.png" width="100%" />
                            </div>
                            <div className="offset-md-2 col-md-7 col-8">
                                <h4>Engineering</h4>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="bg-transparent col-md-6 mt-md-2 mb-md-2 border-0">
                    <CardBody>
                        <div className="row align-items-center">
                            <div className="col-md-3 col-4 text-center">
                                <img src="/assets/images/medicine.png" width="100%" />
                            </div>
                            <div className="offset-md-2 col-md-7 col-8">
                                <h4>Medicine</h4>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="bg-transparent col-md-6 mt-md-2 mb-md-2 border-0">
                    <CardBody>
                        <div className="row align-items-center">
                            <div className="col-md-3 col-4 text-center">
                                <img src="/assets/images/management.png" width="100%" />
                            </div>
                            <div className="offset-md-2 col-md-7 col-8">
                                <h4>Management</h4>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <div className="row align-items-center mt-md-5 mt-4">
                    <div className="col-md-3 offset-md-9 col-12  align-items-center">
                        <Button color="warning" className="btn btn-lg" ><div style={{ color: "white" }}>Contact our Consultants</div></Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

const CountryParts = ({ title, country }) => {
    var clgdata;
    if (title === "Engineering")
        clgdata = country.engineering
    else if (title === "Medicine")
        clgdata = country.medicine
    else if (title === "Management")
        clgdata = country.management

    const renderClgs = clgdata.map((item) => {
        return (
            <div className="col-md-10 shadow">
                <Card>
                    <CardBody>
                        <CardImg src={item.img}></CardImg>
                        <CardText>
                            <h5>{item.univ}</h5>
                            <p>{item.desc}</p>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    })

    const Univcards = () => {
        return (
            <div className="container">
                <Card className="shadow">
                    <CardBody>
                        <CardTitle className="text-center">
                            <h4>{title}</h4>
                        </CardTitle>
                        <hr />
                        <div className="row">
                            <Carousel plugins={[
                                'centered',
                                'infinite',
                                {
                                    resolve: autoplayPlugin,
                                    options: {
                                        interval: 5000,
                                        numberOfSlides: 3
                                    }

                                },
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        interval: 3000,
                                        numberOfSlides: 3
                                    }

                                },
                                {
                                    resolve: arrowsPlugin,
                                    options: {
                                        arrowLeft: <Button><Icon name="chevron-left" /></Button>,
                                        arrowLeftDisabled: <Button><Icon name="angle-left" /></Button>,
                                        arrowRight: <Button><Icon name="chevron-right" /></Button>,
                                        arrowRightDisabled: <Button><Icon name="angle-right" /></Button>,
                                        addArrowClickHandler: true,
                                    }
                                }
                            ]}
                                breakpoints={{
                                    768: {
                                        plugins: [
                                            'centered',
                                            'infinite',
                                            'fastSwipe',
                                            {
                                                resolve: autoplayPlugin,
                                                options: {
                                                    interval: 5000,
                                                    numberOfSlides: 1
                                                }

                                            },
                                            {
                                                resolve: slidesToShowPlugin,
                                                options: {
                                                    interval: 3000,
                                                    numberOfSlides: 1
                                                }

                                            },
                                            {
                                                resolve: slidesToShowPlugin,
                                                options: {
                                                    numberOfSlides: 1
                                                }
                                            }
                                        ]
                                    },
                                    1176: {
                                        plugins: [
                                            'centered',
                                            'infinite',
                                            {
                                                resolve: autoplayPlugin,
                                                options: {
                                                    interval: 5000,
                                                    numberOfSlides: 2
                                                }

                                            },
                                            {
                                                resolve: slidesToShowPlugin,
                                                options: {
                                                    interval: 3000,
                                                    numberOfSlides: 2
                                                }

                                            },
                                            {
                                                resolve: arrowsPlugin,
                                                options: {
                                                    arrowLeft: <Button><Icon name="chevron-left" /></Button>,
                                                    arrowLeftDisabled: <Button><Icon name="angle-left" /></Button>,
                                                    arrowRight: <Button><Icon name="chevron-right" /></Button>,
                                                    arrowRightDisabled: <Button><Icon name="angle-right" /></Button>,
                                                    addArrowClickHandler: true,
                                                }
                                            }
                                        ]
                                    }

                                }
                                }
                                animationSpeed={2000} className="innerreview">
                                {renderClgs}
                            </Carousel>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
    if (title === "Medicine")
        return (
            <div className="notifbg univcard">
                <Univcards />
            </div>
        )
    else return (
        <div className="univcard">
            <Univcards />
        </div>
    )

}

const Country = (props) => {
    const country = props.country[0][0];
    return (
        <div>
            <div>
                <CountryMain country={country} />
                <CountryParts title={"Engineering"} country={country} />
                <CountryParts title={"Medicine"} country={country} />
                <CountryParts title={"Management"} country={country} />
                <ReviewCarousel />
            </div>
        </div>
    )
}


export default Country