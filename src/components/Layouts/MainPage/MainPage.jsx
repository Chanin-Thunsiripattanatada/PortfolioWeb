import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CardComponent, ExperienceData, AcademicProjectsData } from "./Contents";
import { FaGraduationCap, FaCode, FaDatabase, FaTools, FaLanguage, FaUser, FaBriefcase, FaBook } from "react-icons/fa";

import AboutMe from "./AboutMe";

const ContentSection = ({ id, children }) => {
  return (
    <section id={id} className="mb-4">
      {children}
    </section>
  );
};

const DocumentationPage = () => {
  return (
    <div className="bg-light text-dark min-vh-100 justify-content-center pd-4">
      <Container fluid>
        <Row className="p-4 justify-content-center">
          {/* <TableOfContents /> */}
          <Col md={9} className="p-4">
            <ContentSection id="about-me">
              <h2 className="flex items-center text-xl font-bold">
                <FaUser className="mr-2 text-500" /> About Me
              </h2>
              <AboutMe />
            </ContentSection>
            <ContentSection id="education">
              <div className="mb-6">
                <h2 className="flex items-center text-xl font-bold">
                  <FaGraduationCap className="mr-2 text-500" /> Education
                </h2>
                <p className="mt-2 text-gray-700">
                  Bachelor of Science in Computer Science<br />
                  College of Computing, Khon Kaen University<br />
                  <strong>GPAX:</strong> 3.70 / 4.0
                </p>
              </div>
            </ContentSection>
            <Row>
              <Col>
                <ContentSection id="skills" title="Skills">
                  <div className="mb-6">
                    <h2 className="flex items-center text-xl font-bold">
                      <FaCode className="mr-2 text-500" /> Skills
                    </h2>
                    <p className="mt-2 text-gray-700">
                      <strong>Programming Languages:</strong> C#, Java, Python, JavaScript, SQL, VB.NET, VB6, PHP
                      <br />
                      <strong>Frameworks:</strong> ASP.NET Core, Spring Boot, React.js, Laravel
                      <br />
                      <strong>Others:</strong> RESTful API, Microservices
                    </p>
                  </div>

                  <div className="mb-6">
                    <h2 className="flex items-center text-xl font-bold">
                      <FaDatabase className="mr-2 text-500" /> Databases
                    </h2>
                    <p className="mt-2 text-gray-700">Microsoft SQL Server, MySQL, MongoDB</p>
                  </div>

                  <div className="mb-6">
                    <h2 className="flex items-center text-xl font-bold">
                      <FaTools className="mr-2 text-500" /> Tools
                    </h2>
                    <p className="mt-2 text-gray-700">Git, GitHub, Docker, Postman, IIS, Virtual Machines</p>
                  </div>
                </ContentSection>
              </Col>
              <Col>
                <ContentSection id="language-skills" title="Language Skills">
                  <div>
                    <h2 className="flex items-center text-xl font-bold">
                      <FaLanguage className="mr-2 text-500" /> Language Skills
                    </h2>
                    <p className="mt-2 text-gray-700">
                      <strong>Thai:</strong> Native
                      <br />
                      <strong>English:</strong> Intermediate (able to read technical documentation and code confidently)
                    </p>
                  </div>
                </ContentSection>
              </Col>
            </Row>
            <ContentSection id="experience" title="Experience">
              <h2 className="flex items-center text-xl font-bold">
                <FaBriefcase className="mr-2 text-500" /> Experience
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="row">
                  {ExperienceData.map((item, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                      <CardComponent
                        title={item.title}
                        text={`${item.text} (${item.year})`}
                        image={item.image || null}
                        link={item.link || null}
                        desc={item.desc || null}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ContentSection>
            <ContentSection id="academic-projects" title="Academic Projects">
              <h2 className="flex items-center text-xl font-bold">
                <FaBook className="mr-2 text-500" /> Academic Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="row">
                  {AcademicProjectsData.map((item, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                      <CardComponent
                        title={item.title}
                        text={`${item.text} (${item.year})`}
                        image={item.image || null}
                        link={item.link || null}
                        desc={item.desc || null}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ContentSection>
          </Col>
        </Row>
        <Row className="p-5"/>
      </Container>

    </div>

  );
};

export default DocumentationPage;