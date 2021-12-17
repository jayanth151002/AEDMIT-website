import React, { Component } from "react";
import { ourTeam } from "../../shared/ourTeam";
import ReviewCarousel from "../ReviewCarouselcomponent";
import {
  Card,
  CardText,
  CardBody,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
  CardImg,
  Button,
} from "reactstrap";
import "./aboutus.css";
const CardRender = ({ ourTeam }) =>
  ourTeam.map((member) => (
    <div className="col-lg-4">
      <Card style={{ marginTop: "25px", boxShadow: "0 0 15px grey" }}>
        <CardImg
          top
          src={member.img}
          style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}
          className="img-fluid me-auto"
        />
        <CardBody>
          <div className="row">
            <div className="col-8">
              <div className="display-6">{member.name}</div>
              <h6
                className="border_bottom_ m-0 p-0 mb-3"
                style={{ width: "10vw" }}
              ></h6>
            </div>
            <div className="col-4 my-auto " style={{ fontSize: "20px" }}>
              <a href={member.linkedIn}>
                <span className="fa fa-linkedin"></span>
              </a>
              <a href={member.instagram}>
                <span className="fa fa-instagram"></span>
              </a>
              <img
                src={member.logo}
                className="img-fluid"
                style={{ width: "25px" }}
              />
            </div>
          </div>
          <CardText>{member.about}</CardText>
        </CardBody>
      </Card>
    </div>
  ));
class Aboutus extends Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
  }
  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  handleLogin = (event) => {
    this.toggleModal();
    alert("Username: " + this.username.value + " email: " + this.email.value);
    event.preventDefault();
  };
  render() {
    return (
      <div className="outerDiv_">
        <div className="conatiner">
          <div className="row row-content">
            <div
              className="col-lg-6 order-last order-lg-first text_content_"
              style={{ boxShadow: "0 0 15px grey" }}
            >
              <Card style={{ border: "none" }}>
                <CardBody>
                  <div className="text-center head_ mb-3">
                    <div className="display-2 ">About AEDMIT</div>
                    <h6 className="border_bottom_ m-0 p-0"></h6>
                  </div>
                  <CardText>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </CardText>
                  <Button
                    className="mx-auto bg-success"
                    onClick={this.toggleModal}
                  >
                    Sign Up
                  </Button>
                </CardBody>
              </Card>
            </div>
            <div className="col-lg-5 offset-lg-1 text-center">
              <img
                src="../assets/images/earth.jpg"
                width="70%"
                className="img-fluid mt-3"
              />
            </div>
          </div>
        </div>
        <div
          className="container"
          style={{ marginTop: "20px", marginBottom: "30px" }}
        >
          <div className="text-center head_ mb-3">
            <div className="display-2 ">Our Team</div>
            <h6 className="border_bottom_ m-0 p-0"></h6>
          </div>
          <div className="row row-content">
            <CardRender ourTeam={ourTeam} />
          </div>
        </div>
        <ReviewCarousel style={{ marginTop: "20px" }} />
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader
            close={
              <Button
                color="secondary"
                outline
                className="close"
                onClick={this.toggleModal}
              >
                <large>X</large>
              </Button>
            }
            toggle={this.toggleModal}
          >
            Sign Up
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                  autoComplete="off"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="eamil"
                  name="email"
                  innerRef={(input) => (this.email = input)}
                  autoComplete="off"
                />
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Sign Up
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default Aboutus;
