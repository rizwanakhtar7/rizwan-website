import portrait from './assets/images/selfie-of-me.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';

function About() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <>
      <section id="about-me" className="about-section">
        <div class="about-us-container">
          <div class="grid-row" data-aos="slide-right">
            <img height="450" src={portrait} alt="selfie of me" />
          </div>
          <div class="grid-row" data-aos="slide-left">
          <h1>About Me</h1>
          <hr />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
          </div>
        </div>
      </section>

    </>
  )
}

export default About