import React from "react";
import { Button, Card, CardBody,CardTitle} from 'reactstrap'
import ReviewCarousel from "./ReviewCarouselcomponent";


function FirstBody() {
    return (
        <div className="container">
            <div className="row row-content mainfirst text-center">
                <div className="col-12 col-md-6 order-md-first order-last">
                    <img src="./assets/images/earth.jpg" width="60%" class="img-float mainimg"></img>
                </div>
                <div className="col col-md text-align-left order-md-last order-first head">
                    <h1>
                        Connect with India’s best study abroad experts.
                    </h1>
                    <div className="row subhead offset-md-1">
                        <div className="col-4 col-md-3">
                            <h6>Live 1 hour Session</h6>
                        </div>
                        <div className="col-4 col-md-2 offset-lg-1">
                            <h6>Profile Evaluation</h6>
                        </div>
                        <div className="col-4 col-md-3 offset-md-1">
                            <h6>University Shortlist</h6>
                        </div>
                    </div>
                    <div><Button className="btn-counsel">Book Free Counselling Session</Button></div>
                </div>
            </div>
        </div>
    )
}


function SecondBody() {
    return (
        <div className="container secondmain">
            <div className="row row-content">
                <div className="col-6 col-md-3 text-center sbodyitem">
                    <img className="img-float sbody" src="./assets/images/logo.png" width="50%"></img>
                    <h5>Lorem Ipsum</h5>
                </div>
                <div className="col-6 col-md-3 text-center sbodyitem">
                    <img className="img-float" src="./assets/images/logo.png" width="50%"></img>
                    <h5>Lorem Ipsum</h5>
                </div>
                <div className="col-6 col-md-3 text-center sbodyitem">
                    <img className="img-float" src="./assets/images/logo.png" width="50%"></img>
                    <h5>Lorem Ipsum</h5>
                </div>
                <div className="col-6 col-md-3 text-center sbodyitem">
                    <img className="img-float" src="./assets/images/logo.png" width="50%"></img>
                    <h5>Lorem Ipsum</h5>
                </div>
            </div>
        </div>
    )
}

function MainCard() {
    return (
        <div className="notifbg">
            <div className="container maincard">
                <div className="col-md-12 shadow">
                    <Card>
                        <CardBody>
                            <CardTitle>
                                <h4 className="text-center">Everything you need for your study abroad dream</h4>
                            </CardTitle>
                            <hr />
                            <div class="row row-header">
                                <div class="col-12 col-md-6 text-center mcarditems">
                                    <h5>Personalised Guidance</h5>
                                    <p>India’s best counsellors with you, all the way.</p>
                                </div>
                                <div class="col-12 col-md-6 text-center mcarditems">
                                    <h5>IELTS Coaching</h5>
                                    <p>Learn from India’s best IELTS trainers.</p>
                                </div>
                                <div class="col-12 col-md-6 text-center mcarditems">
                                    <h5>Financing Help</h5>
                                    <p>Loans and scholarships assistance.</p>
                                </div>
                                <div class="col-12 col-md-6 text-center mcarditems">
                                    <h5>Visa Assurance</h5>
                                    <p>Our visa counsellors have a 98% success rate.</p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}


const Notifs = ({ news, notifs }) => {
    const rendernews = news.map((item) => {
        return (
            <tr>
                <td>
                    {item.news}
                </td>
            </tr>
        )
    })
    const rendernotifs = notifs.map((item) => {
        return (
            <tr>
                <td>
                    {item.notification}
                </td>
            </tr>
        )
    })

    return (
        <div className="">
            <div className="container notifscard">
                <div className="col-md-12 shadow">
                    <Card className="ncard">
                        <CardBody>
                            <CardTitle>
                                <h4 className="text-center">News and Notifications</h4>
                            </CardTitle>
                            <hr />
                            <div className="row row-content">
                                <div className="col-md-6 col-lg-4 offset-lg-1 nc1">
                                    <Card className="">
                                        <CardBody>
                                            <CardTitle className="text-center">
                                                <b>News</b>
                                            </CardTitle>
                                            <hr />
                                            <div className="overflow-auto ncarditem">
                                                <table class="table table-striped">
                                                    <tbody>
                                                        {rendernews}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="col-md-6 col-lg-4 offset-lg-2 nc1 nc2">
                                    <Card className="">
                                        <CardBody>
                                            <CardTitle className="text-center">
                                                <b>Notifications</b>
                                            </CardTitle>
                                            <hr />
                                            <div className="overflow-auto ncarditem">
                                                <table class="table table-striped">
                                                    <tbody>
                                                        {rendernotifs}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}


const FrontCard = ({ items, title }) => {

    const Fcarditems = items.map((item) => {
        return (
            <div className="offset-md-1 col-12 col-md-5 text-left">
                <div className="row align-items-center fcarditems">
                    <div className="col-5 col-lg-3">
                        <img src={item.img} className="img-float" width="100%" />
                    </div>
                    <div className="col-7 col-lg-9 align-middle">
                        <h6>{item.name}</h6>
                        <p>{item.city}</p>
                    </div>
                </div>
            </div>
        )
    })

    const DeliverCard = () => {
        return (
            <div className="container frontcard">
                <div class="shadow">
                    <Card>
                        <CardBody>
                            <CardTitle>
                                <h4 className="text-center">
                                    {title}
                                </h4>
                                <hr />
                                <div className="row">
                                    {Fcarditems}
                                </div>
                            </CardTitle>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }

    if (title === "Our Consultants")
        return (
            <div className="notifbg">
                <DeliverCard />
            </div>
        )
    else
        return (
            <DeliverCard />
        )
}

const First = (props) => {
    const news = props.news;
    const notifs = props.notifs;
    const consultants = props.consultants
    const mentors = props.mentors

    return (
        <div>
            <FirstBody />
            <SecondBody />
            <MainCard />
            <Notifs news={news} notifs={notifs} />
            <FrontCard items={consultants} title="Our Consultants" />
            <FrontCard items={mentors} title="Our Mentors" />
            <ReviewCarousel />
        </div>
    )
}


export default First