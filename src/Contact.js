import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';

function Contact() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <>
      <section id="contact_us" className="contact-me">
       <h1>Contact Me</h1>
       <hr />
       <div className="contact-me-details">
          <div data-aos="slide-right">
            EMAIL <br />
            <a href="mailto: rizwanakhtar@live.co.uk" rel= "noreferrer" target="_blank"><FaEnvelope className="fa-icon-contact"/></a>
          </div>
          <div data-aos="zoom-in">
            Github <br />
            <a href="https://github.com/rizwanakhtar7" rel= "noreferrer" target="_blank"><FaGithub className="fa-icon-contact"/></a>

          </div>
          <div data-aos="slide-left">
            LINKEDIN <br />
            <a href="https://www.linkedin.com/in/rakhtar7/" rel= "noreferrer" target="_blank"><FaLinkedin className="fa-icon-contact"/></a>
          </div>
       </div>
       
      </section>
    </>
  )
}

export default Contact