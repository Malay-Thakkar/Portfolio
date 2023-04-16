import { Container, Row } from "react-bootstrap";
import bg1 from "../assets/img/bg1.png";
import bg2 from "../assets/img/bg-2.png";
import bg3 from "../assets/img/bg-3.png";
import React from 'react'

export const Services = () => {
    return (
        <>
            <section className="services" id="services">
                <Container>
                    <Row>
                        <h2>Services</h2>
                        <div className="services-item">
                            <div className="services-text">
                                <p className="large-text">Web <br/>Devlopment</p>
                                <img src={bg2} className="ser-image" alt="bg1" />
                            </div>
                        </div>
                        <div className="services-item">
                            <div className="services-text">
                                <p className="large-text">DAPP <br/>Devlopment</p>
                                <img src={bg3} className="ser-image" alt="bg2" />
                            </div>
                        </div>
                        <div className="services-item">
                            <div className="services-text">
                                <p className="large-text">UI/UX <br/>Designer</p>
                                <img src={bg1} className="ser-image" alt="bg1" />
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>

        </>

    )
}