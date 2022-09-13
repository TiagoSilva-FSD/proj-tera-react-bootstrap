import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function AppHeader(props) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    { props.botao }
                    <img src={logo} className="mx-4" width="65px" height="50px" alt="logo" />
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/home">Home</Link>
                            <Nav.Link href="http://localhost:3000">Blog</Nav.Link>
                            <Nav.Link href="http://localhost:3000">Sobre</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Pesquisar Google"
                                className="entrada_pesquisa me-2"
                                aria-label="Search"
                            />
                            <Button variant="primary" onClick={() => {
                                let entrada = document.querySelector(".entrada_pesquisa");
                                let url = 'https://www.google.com.br/search?q=' + entrada.value;
                                window.open(url);
                            }}>Go</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
