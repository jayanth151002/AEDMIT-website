import React, { Component} from "react";
import { Button, Card, CardBody, CardText, CardTitle, CardImg} from 'reactstrap'
import Carousel, { autoplayPlugin, slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import Icon from 'react-fa'
import { REVIEWS } from '../shared/studentreviews'


class ReviewCarousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: REVIEWS
        }
    }

    render() {

        const StudentReviews = ({ reviews }) => {
            const sturev = reviews.map((rev) => {
                return (
                    <div>
                        <Card className="col-md-10 shadow">
                            <CardBody>
                                <CardImg src={rev.image} width="100%" />
                                <CardText>
                                    <b>{rev.name}</b>, <small>{rev.desc}</small>
                                </CardText>
                                <CardText>
                                    {rev.city}
                                </CardText>
                                <CardText className="">
                                    {rev.review}
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                )
            })

            return (
                <div className="notifbg">
                    <div className="container reviewcard">
                        <Card className="shadow">
                            <CardBody>
                                <CardTitle>
                                    <h4 className="text-center">Student Reviews</h4>
                                </CardTitle>
                                <hr />
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
                                                    // options: {
                                                    //     //arrowLeft: <Button><Icon name="chevron-left" /></Button>,
                                                    //     arrowLeftDisabled: <Button><Icon name="angle-left" /></Button>,
                                                    //     //arrowRight: <Button><Icon name="chevron-right" /></Button>,
                                                    //     arrowRightDisabled: <Button><Icon name="angle-right" /></Button>,
                                                    //     //addArrowClickHandler: true,
                                                    // }
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
                                    {sturev}

                                </Carousel>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <StudentReviews reviews={this.state.reviews} />
            </div>
        )

    }

}

export default ReviewCarousel