import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/portfolio_pngfile_2.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8-github-512.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Full Stack Devloper", "DAPP Devloper", "UI/UX Designer", "Smart contract Devloper"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>Hello, I'm<br />Malay Thakkar</h1>
                  <h2>and i'm <span className="txt-rotate" style={{color:"aqua"}}  data-rotate='[ "Full Stack Devloper", "DAPP Devloper", "UI/UX Designer", "Smart contract Devloper"]'>{text}</span></h2>
                  <div className="social-icon">
                    <a href="https://www.linkedin.com/in/malay-thakkar/"><img src={navIcon1} alt="Icon" /></a>
                    <a href="https://github.com/Malay-Thakkar"><img src={navIcon2} alt="Icon" /></a>
                    <a href="https://www.instagram.com/thakkar_malay/"><img src={navIcon3} alt="Icon" /></a>
                  </div><br/>
                  <button className="resume-btn"><a href="#resume"> Download Resume<ArrowRightCircle size={25} /></a></button>
                  <button ><a href="#contect">Let’s Connect <ArrowRightCircle size={25} /> </a></button>
                
               
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} className="heroimg" alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
