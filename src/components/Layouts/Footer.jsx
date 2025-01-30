import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-dark text-light">
            <Container>
                <Row className="text-center">

                </Row>
                <hr className="bg-light"/>
                <Row>
                    <Col>
                        <h5>Contact</h5>
                        <p>Email: chanin.thunsiripattanatada@gmail.com</p>
                        <p>chanin.t@kkumail.com</p>

                    </Col>
                    <Col className="text-center">
                    <p>
                            <a href="https://github.com/Chanin-Thunsiripattanatada" className="text-light">
                                <FaGithub size={30} />
                            </a>
                        </p>
                    </Col>
                    <Col className="text-center">
                        <p>&copy; {new Date().getFullYear()} Chanin Thunsiripattanatada. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;