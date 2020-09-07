import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            {/* <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav> */}
           
                <Navbar bg="dark" variant="dark">
                    {/* <Navbar.Brand href="#home">Shop</Navbar.Brand> */}
                    <Nav className="mr-auto">
                        <Nav.Link href="/shop">Shop</Nav.Link>
                        <Nav.Link href="/review">Review</Nav.Link>
                        <Nav.Link href="/manage">Manage Inventory</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
              
           
        </div>
    );
};

export default Header;