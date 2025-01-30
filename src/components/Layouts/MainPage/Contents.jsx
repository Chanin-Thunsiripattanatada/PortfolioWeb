import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CardComponent = ({ image, title, text, link, course }) => {
  return (
    <Card className="h-100 shadow-sm">
      {image && <Card.Img variant="top" src={image} alt={title} style={{ maxWidth: "500px", height: "auto", margin: "10px auto" }}  />}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {course && <Card.Subtitle className="text-muted">{course}</Card.Subtitle>}
        <Card.Text>{text}</Card.Text>
        {link && (
          <Button variant="primary" href={link} target="_blank" rel="noopener noreferrer">
            Learn More
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

const ExperienceData = [
  {
    image: require("../../../assets/images/ta.png"),
    title: "Teaching Assistant",
    course: "Courses: Fundamentals of Computer Science and Computer Architecture",
    year: "2566",
    text: "Supported teaching activities in lectures and labs by guiding junior students in understanding course content and solving problems, as well as reviewing and evaluating assignments and exams.",
  },
  {
    image: require("../../../assets/images/muangyaekhph.png"),
    title: "Ban Muang Yaek Subdistrict Health Promoting Hospital Website",
    year: "2567",
    text: "Developed a website using React.js, connected it to a Firestore database, and deployed it using Firebase Hosting.",
    link: "https://muangyaekhph.site/",
  },
  {
    image: require("../../../assets/images/googleappscript.png"),
    title: "Google Apps Script for Connecting Google Sheets",
    year: "2567",
    text: "Developed a Google Apps Script to integrate data between Google Sheets, implementing functions for recording, editing, and displaying data.",
  },
];

const AcademicProjectsData = [
  {
    image: require("../../../assets/images/comcraft.png"),
    title: "Online Computer Equipment E-Commerce System",
    year: "2567",
    course: "CP353002 Principles of Software Design and Development (Grade: A)",
    text: "Developed an authentication system with role-based access control using tokens, built RESTful APIs with Spring Boot and MySQL, and designed the frontend using React.js with state management handled by Redux.",
    link: "https://github.com/Chanin-Thunsiripattanatada/EcommerceWebsite_OnlineComputerShop_ReactRedux_SoftwareDesign",
  },
  {
    image: require("../../../assets/images/school_co.png"),
    title: "School Cooperative Store System",
    year: "2566",
    course: "CP352003 Database Management System and Database Design (Grade: A)",
    text: "Designed a database to manage products, customers, orders, and the POS system, supporting memberships, stock purchases, and dividend calculations. Developed an inventory management system, order processing, and sales history using JavaFX and MySQL.",
    link: "https://github.com/Chanin-Thunsiripattanatada/SchoolCooperativeStoreSystem_DatabaseDesignProject",
  },
];

export { CardComponent, ExperienceData, AcademicProjectsData };
