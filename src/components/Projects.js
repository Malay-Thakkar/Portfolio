import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/p1.png";
import projImg2 from "../assets/img/p2.jpg";
import projImg3 from "../assets/img/p3.jpg";
import projImg4 from "../assets/img/p4.jpg";
import projImg5 from "../assets/img/p5.jpg";
import projImg6 from "../assets/img/p6.png";
import navIcon1 from "../assets/img/browser-chrome.svg";
import navIcon2 from "../assets/img/icons8-github-512.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "E-Voting DAPP",
      description: "Etherium base voting app",
      imgUrl: projImg1,
      SourceCode: "https://github.com/Malay-Thakkar/Ethereum-Voting-Dapp",
      Live: "https://github.com/Malay-Thakkar/Ethereum-Voting-Dapp",
    },
    {
      title: "Cafe Time",
      description: "E-commerce Website",
      imgUrl: projImg2,
      SourceCode: "https://github.com/Malay-Thakkar/cafe-time",
      Live: "https://malay-thakkar.github.io/cafe-time/",
    },
    {
      title: "QR Base Feedback",
      description: "Scan QR code Login and send Feedback",
      imgUrl: projImg3,
      SourceCode: "https://github.com/Malay-Thakkar/QR-code-base-feedback-form",
      Live: "https://github.com/Malay-Thakkar/QR-code-base-feedback-form",
    },
    {
      title: "School Website",
      description: "HTML, CSS, & JS base ",
      imgUrl: projImg4,
      SourceCode: "https://github.com/Malay-Thakkar/Navin-Sarva-Vidyalaya.",
      Live: "https://malay-thakkar.github.io/Navin-Sarva-Vidyalaya/Navin%20Sarva%20Vidyalaya/index.html",
    },
    {
      title: "Business Application",
      description: "Desktop Application C#",
      imgUrl: projImg5,
      SourceCode: "https://github.com/Malay-Thakkar/Business-Application",
      Live: "https://github.com/Malay-Thakkar/Business-Application",
    },
    {
      title: "Notepad",
      description: "Desktop Application C#",
      imgUrl: projImg6,
      SourceCode: "https://github.com/Malay-Thakkar/Notepad",
      Live: "https://github.com/Malay-Thakkar/Notepad",
    },
  ];

  return (
    <section className="project" id="projects">
    <Container>
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
              <h2>Projects</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">ALL</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Web</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">DAPP & Desktop App</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                    <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                      <Col size={12} sm={6} md={4}>
                          <div className="proj-imgbx">
                            <img src={projImg2} alt="img" />
                            <div className="proj-txtx">
                              <h4>Cafe Time</h4>
                              <span>E-commerce Website</span><br />
                              <div className="social-icon">
                                <a href="https://github.com/Malay-Thakkar/cafe-time"><img src={navIcon2} alt="Icon" /></a>
                                <a href="https://malay-thakkar.github.io/cafe-time/"><img src={navIcon1} alt="Icon" /></a>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col size={12} sm={6} md={4}>
                          <div className="proj-imgbx">
                            <img src={projImg3} alt="img" />
                            <div className="proj-txtx">
                              <h4>QR Base Feedback</h4>
                              <span>Scan QR code Login and send Feedback</span><br />
                              <div className="social-icon">
                                <a href="https://github.com/Malay-Thakkar/QR-code-base-feedback-form"><img src={navIcon2} alt="Icon" /></a>
                                <a href="https://github.com/Malay-Thakkar/QR-code-base-feedback-form"><img src={navIcon1} alt="Icon" /></a>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col size={12} sm={6} md={4}>
                          <div className="proj-imgbx">
                            <img src={projImg4} alt="img" />
                            <div className="proj-txtx">
                              <h4>School Website</h4>
                              <span>HTML, CSS, & JS base</span><br />
                              <div className="social-icon">
                                <a href="https://github.com/Malay-Thakkar/Navin-Sarva-Vidyalaya"><img src={navIcon2} alt="Icon" /></a>
                                <a href="https://malay-thakkar.github.io/Navin-Sarva-Vidyalaya/Navin%20Sarva%20Vidyalaya/index.html"><img src={navIcon1} alt="Icon" /></a>
                              </div>
                            </div>
                          </div>
                        </Col>
                        </Row>
                      </Tab.Pane>


                      <Tab.Pane eventKey="third">
                        <Row>
                        <Col size={12} sm={6} md={4}>
                          <div className="proj-imgbx">
                            <img src={projImg1} alt="img" />
                            <div className="proj-txtx">
                              <h4>E-commerce</h4>
                              <span>Etherium base voting app</span><br />
                              <div className="social-icon">
                                <a href="https://github.com/Malay-Thakkar/Ethereum-Voting-Dapp"><img src={navIcon2} alt="Icon" /></a>
                                {/* <a href={Live}><img src={navIcon1} alt="Icon" /></a> */}
                              </div>
                            </div>
                          </div>
                          </Col>
                          <Col size={12} sm={6} md={4}>
                          <div className="proj-imgbx">
                            <img src={projImg5} alt="img" />
                            <div className="proj-txtx">
                              <h4>Business Application</h4>
                              <span>Desktop Application C#</span><br />
                              <div className="social-icon">
                                <a href="https://github.com/Malay-Thakkar/Business-Application"><img src={navIcon2} alt="Icon" /></a>
                                {/* <a href={Live}><img src={navIcon1} alt="Icon" /></a> */}
                              </div>
                            </div>
                          </div>
                          </Col>
                          <Col size={12} sm={6} md={4}>
                          <div className="proj-imgbx">
                            <img src={projImg6} alt="img" />
                            <div className="proj-txtx">
                              <h4>Notepad Application</h4>
                              <span>Desktop Application C#</span><br />
                              <div className="social-icon">
                                <a href="https://github.com/Malay-Thakkar/Notepad"> <img src={navIcon2} alt="Icon" /></a>
                                {/* <a href={Live}><img src={navIcon1} alt="Icon" /></a> */}
                              </div>
                            </div>
                          </div>
                        </Col>
                        </Row>
                    
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} className="background-image-right" alt="" />
    </section>
  )
}
