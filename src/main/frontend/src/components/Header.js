import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">Employee Management</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/employee/create">Create</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
