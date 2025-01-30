import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaJava, FaPython, FaJs, FaReact, FaDatabase, FaGit } from "react-icons/fa";
import { SiSpring, SiMysql, SiPostman, SiBootstrap, SiHtml5, SiCss3, SiFirebase } from "react-icons/si";
import profile from '../../../assets/images/profile.png';
const AboutMe = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col xs={12} md={4} className="text-center">
          <Image
            src={profile}
            rounded
            width={180}
            height={200}
            alt="Profile"
            className="mb-3 shadow-lg"
          />
        </Col>
        <Col xs={12} md={8} className="text-center text-md-start">
          <h1 className="fw-bold">Hi 👋, I'm Chanin Thunsiripattanatada (Aomsin)</h1>
          <p className="text-muted">
            I am currently pursuing a bachelor's degree with an interest in software
            development and the application of new technologies. I am hardworking,
            determined, and goal-oriented, with a clear focus on continuous learning
            and skill development. I have strong teamwork skills and am always open
            to feedback and suggestions from others.
          </p>
        </Col>
      </Row>

      
      <Row className="mt-4">
        <Col md={12}>
          <h4>🚀 Languages and Tools:</h4>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <FaJava size={50} />
            <FaPython size={50} />
            <FaJs size={50} />
            <SiSpring size={50} />
            <SiMysql size={50} />
            <SiPostman size={50} />
            <FaReact size={50} />
            <SiBootstrap size={50} />
            <SiHtml5 size={50} />
            <SiCss3 size={50} />
            <FaDatabase size={50} />
            <FaGit size={50} />
            <SiFirebase size={50} />
          </div>
        </Col>
      </Row>
    
    </Container>
  );
};

export default AboutMe;
