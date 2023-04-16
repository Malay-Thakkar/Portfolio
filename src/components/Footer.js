import { Row} from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8-github-512.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <>
    <footer className="footer">
        <Row style={{ textAlign: "center" }}>
        <h1 style={{ color: "white" }}>Follow On</h1>
        <div className="social-icon">
              <a href="https://www.linkedin.com/in/malay-thakkar/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Malay-Thakkar"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/thakkar_malay/"><img src={navIcon3} alt="Icon" /></a>
            </div>

         <p>Address:Vadnagar, Mehsana, Gujrat <br/>
         contact no.:+91 8320135247<br/>
         Mail id: its.malaythakkar@gmail.com
         </p>   

        <span>Created By Malay Thakkar | &copy; 2023 All rights reserved.
        </span>
        </Row>
    </footer>
    </>
      )
}

 