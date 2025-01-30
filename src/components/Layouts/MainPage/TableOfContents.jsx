import React, { useEffect, useState } from "react";
import { Button, Nav, Offcanvas } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

const TableOfContents = () => {
    const [activeSection, setActiveSection] = useState("");
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    useEffect(() => {
      const handleScroll = () => {
        const sections = ["about-me", "education", "skills", "language-skills", "experience", "academic-projects"];
        let currentSection = "about-me";
  
        sections.forEach((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              currentSection = section;
            }
          }
        });
  
        setActiveSection(currentSection);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const handleLinkClick = (sectionId) => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      handleClose();
    };
  
    return (
      <>
  
        <Button
          variant="primary"
          onClick={handleShow}
          size="sm"
          style={{
            position: "fixed",
            top: "40vh",
            left: "10px",
            width: "50px",
            height: "50px",
          }}
        >
          <FaBars />
        </Button>
  
        <Offcanvas data-bs show={show} onHide={handleClose} placement="start" scroll="true" style={{ backgroundColor: "rgba(61, 61, 61, 0.85)" }}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="text-light">Table of Contents</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column text-light">
              <Nav.Link onClick={() => handleLinkClick("about-me")} className={activeSection === "about-me" ? "fw-bold" : ""}>About Me</Nav.Link>
              <Nav.Link onClick={() => handleLinkClick("education")} className={activeSection === "education" ? "fw-bold" : ""}>Education</Nav.Link>
              <Nav.Link onClick={() => handleLinkClick("skills")} className={activeSection === "skills" ? "fw-bold" : ""}>Skills</Nav.Link>
              <Nav.Link onClick={() => handleLinkClick("language-skills")} className={activeSection === "language-skills" ? "fw-bold" : ""}>Language Skills</Nav.Link>
              <Nav.Link onClick={() => handleLinkClick("experience")} className={activeSection === "experience" ? "fw-bold" : ""}>Experience</Nav.Link>
              <Nav.Link onClick={() => handleLinkClick("academic-projects")} className={activeSection === "academic-projects" ? "fw-bold" : ""}>Academic Projects</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  };

  export default TableOfContents;