import './App.css';
import'./background.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import {About} from "./components/About";
import {Services} from "./components/Services";
import { Testimonial } from './components/Testimonial';
import { Resume } from './components/Resume';
function App() {
  return (
    <div className="App">
        <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <NavBar />
      <Banner />
      <About />
      <Services />   
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Projects />
      <Testimonial />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
