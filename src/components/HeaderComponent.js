import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen

        })
    }


    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

    render() {
        return (
            <div>
                <Navbar color="danger" dark expand="lg" light container className="fixed-top">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand classname="mr-auto navtitle" href="/">
                        AEDMIT
                    </NavbarBrand>
                    <Nav className="ml-auto d-block d-lg-none" navbar>
                        <NavItem>
                            <Button color="secondary" dark onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                        </NavItem>
                    </Nav>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span>Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/country/1">
                                    <span className="fa fa-info fa-lg"></span>Country
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/experts">
                                    <span className="fa fa-list fa-lg"></span>Experts
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/about">
                                    <span className="fa fa-address-card fa-lg"></span>About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/portal">
                                    <span className="fa fa-address-card fa-lg"></span>Student Portal
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/faqs">
                                    <span className="fa fa-address-card fa-lg"></span>FAQs
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    <Nav className="ml-auto d-none d-lg-block" navbar>
                        <NavItem>
                            <Button color="secondary" dark onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                        </NavItem>
                    </Nav>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader close={<Button color="secondary" outline className="close" onClick={this.toggleModal}><large>X</large></Button>} toggle={this.toggleModal}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} autoComplete="off" />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input} autoComplete="off" />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input} autoComplete="off" />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

}

export default Header