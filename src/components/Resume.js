import Iframe from 'react-iframe';
import MyResume from '../assets/Malay_Thakkar_Resume.pdf'
import '../App.css'

export const Resume = () => {
  return (
    <div className="resume" id="resume">
        <h2>Resume</h2>
        <Iframe url={MyResume}
          id=""
          className="resume-frame" />
    </div>
  )
}