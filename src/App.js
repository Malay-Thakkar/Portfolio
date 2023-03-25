import Navbar from './component/Navbar';
import Profile from './component/Home/Profile';
import About from './component/About/Aboutme';
import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/contact';
import Footer from './component/Footer';

import './App.css';
import './background.css';

function App() {
  return (
    <>
   
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <Navbar />
          <div id="title">
            <Profile id="portfolio" />
            <About />
            <Portfolio />
            <Contact id="contact"/>
          </div>
          <Footer />



    </>

  );
}

export default App;
