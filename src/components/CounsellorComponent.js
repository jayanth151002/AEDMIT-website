import React, { Component, useState } from 'react'
import { Card, CardHeader, CardBody, CardImg, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import ReviewCarousel from './ReviewCarouselcomponent'
import { COUNSELLORS } from '../shared/counsellors'

const Counsmain = () => {
    return (
        <div className="counsmain container">
            <h2 className='text-center' style={{ marginTop: "20px" }}>Need any help regarding abroad admission? Reach out to our Counsellors.</h2>
            <div className='row'>
                <div className='col-md-4 counsimg'>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><h4> Select the best college</h4></li>
                        <li class="list-group-item"><h4>Get the best LoR</h4></li>
                        <li class="list-group-item"><h4>Amazing Scholarships</h4></li>
                    </ul>
                    <div className='text-center mt-3 mt-md-5'>
                        <Button color="warning" className="btn btn-lg" >
                            <Link to="/counsellor" style={{ textDecoration: "none" }}><div style={{ color: "white" }}>Contact our Counsellors</div></Link>
                        </Button>
                    </div>
                </div>
                <div className='col-md-6 offset-md-2 counsimg d-none d-md-block'>
                    <img src='./assets/images/counsellor.jpg' width="100%" />
                </div>
            </div>
        </div>
    )
}



const Counsitems = () => {
    const [counsellors, setState] = useState(COUNSELLORS);

    const Csitems = counsellors.map((item) => {
        return (
            <div className='mx-auto col-md-8 col-lg-6 counscard'>
                <Card className='mx-auto col-lg-9' >
                    <CardBody>
                        <CardImg src={item.img} alt="" />
                        <h3 style={{ marginTop: "10px" }}>{item.name}</h3>
                        <h5 style={{ marginTop: "10px", marginLeft: "-2px" }}>{item.desc}</h5>
                        <p style={{ textAlign: "justify" }} className='d-none d-md-block'>{item.about}</p>
                        <div className='row mt-md-1  mt-3'>
                            <div className='col-4 text-center'>
                                <a href={item.link1}><i className="fa fa-linkedin fa-lg"></i></a>
                            </div>
                            <div className='col-4 text-center'>
                                <a href={item.link2}><i className="fa fa-facebook fa-lg"></i></a>
                            </div>
                            <div className='col-4 text-center'>
                                <a href={item.link3}><i className="fa fa-instagram fa-lg"></i></a>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    })

    return (
        <div className="container counsitems">
            <div className='text-center'>
                <h2 style={{ marginBottom: "50px" }}>Our Counsellors</h2>
            </div>
            <div className="row">
                {Csitems}
            </div>
        </div>

    )
}


const Counsellor = () => {
    return (
        <div>
            <Counsmain />
            <Counsitems />
            <ReviewCarousel />
        </div>
    )
}

export default Counsellor