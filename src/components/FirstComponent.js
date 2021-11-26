import React, { Component } from "react";
import { Button, Card, CardBody, CardText, CardTitle, CardHeader } from 'reactstrap'

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
        <div className="container maincard">
            <div className="col-md-8 offset-md-2">
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
    )
}


const First = () => {
    return (
        <div>
            <FirstBody />
            <SecondBody />
            <MainCard />
        </div>
    )
}


export default First