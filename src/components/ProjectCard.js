import { Col } from "react-bootstrap";
import navIcon1 from "../assets/img/browser-chrome.svg";
import navIcon2 from "../assets/img/icons8-github-512.svg";
export const ProjectCard = ({ title, description, imgUrl, SourceCode,Live }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="img"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br/>
          <div className="social-icon">
           
              <a href={SourceCode}><img src={navIcon2} alt="Icon" /></a>
              <a href={Live}><img src={navIcon1} alt="Icon" /></a>
          </div>
        </div>
      </div>
    </Col>
  )
}

