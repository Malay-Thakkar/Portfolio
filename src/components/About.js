import { Container, Row } from "react-bootstrap";
import React from 'react'
import { Skills } from "./Skills";
export const About = () => {
    return (
        <>
            <section className="about" id="about">
                <Container>
                    <Row>
                        <h2>About Me</h2>
                        <h4 style={{ paddingBottom: "5rem" }}>I am a sixth-semester computer engineering student at Ganpat University. I have experience in HTML, CSS, JavaScript, and Node.js for server-side development. I am familiar with front-end frameworks like React and back-end frameworks like Express. I can solve complex problems and troubleshoot technical issues, and I know version control systems like Git and GitHub.
                        </h4>
                    </Row>

                    <Skills />
                    <Row>
                        <div class="about-item">
                            <div class="abt-text">
                                <p class="large-text">30+</p>
                                <p class="small-text">Projects <br /> Completed</p>
                            </div>
                        </div>
                        <div class="about-item">
                            <div class="abt-text">
                                <p class="large-text">2+</p>
                                <p class="small-text">Happy <br /> Client</p>
                            </div>
                        </div>
                    </Row>
                    <Row style={{ paddingTop: "5rem" }}>

                        <h2>Certificate</h2>
                        <div style={{ paddingTop: "3rem" }}>
                            <h3 style={{ color: "hsl(57, 86%, 81%)" }}>WEB DESIGN FOR EVERYBODY: BASICS OF WEB DEVELOPMENT & CODING, COURSERA, (SPECIALIZATION)</h3>
                                <p style={{color:"ivory"}}>Skills: Web Development, Cascading Style Sheets (CCS), Html 5, JavaScript, Responsive Web Design</p> 
                                <p>Link: <a href="https://coursera.org/share/41730d3613205bb531eeaa5f745ab228">Credential</a></p>
                        </div>

                        <div style={{ paddingTop: "3rem" }}>
                            <h3 style={{ color: "hsl(57, 86%, 81%)" }}>Blockchain, COURSERA, (SPECIALIZATION)</h3>
                                <p style={{color:"ivory"}}>Skills: Smart Contract, Ethereum, Blockchains, Solidity</p> 
                                <p>Link: <a href="https://coursera.org/share/a0eeee605080c747b1a86de806ea9484">Credential</a></p>
                        </div>

                        <div style={{ paddingTop: "3rem" }}>
                            <h3 style={{ color: "hsl(57, 86%, 81%)" }}>PROGRAMMING FUNDAMENTALS, COURSERA</h3>
                                <p style={{color:"ivory"}}>Skills: -Algorithms, Programming Language Concepts, Problem Solving, C Programming</p> 
                                <p>Link: <a href="https://coursera.org/share/376fc4389f30046e587668295d0ae630">Credential</a></p>
                        </div>
                    </Row >
                </Container >

            </section >

        </>
    )
}



