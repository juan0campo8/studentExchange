import React, { Component } from "react";
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Routes,
    Route, 
    Link
} from "react-router-dom";

import Home from "../../pages/Home";
import Login from "../../pages/Login"

export default class NavbarComp extends Component{
    render(){
    return (
        <Router>
        <div>
        <Navbar bg="light" variant={"light"} expand="lg">
            <Container>
                <Navbar.Brand as={Link} to={"/"}> Student Exchange</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Brand as={Link} to={"/login"}>
                        <img
                        alt=""
                        src="src\assets\shoppingcart.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                         />{' '}
                        Cart
                    </Navbar.Brand>
                </Navbar.Collapse>
            </Container>
        </Navbar>    
        </div>
        <div>
            <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            </Routes>
        </div>
        </Router>
    )
    }
}
