import React from 'react'
import background from './assets/images/hero-img.jpg'
import { Link } from 'react-scroll'

function Hero() {
  
  const [backgroundColor, setBackgroundColor] = React.useState(`linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2))`)

  const setColor = (backgroundColor) => {
    setBackgroundColor(backgroundColor)
  }

  return (
    <>
      <section className="hero" style={{ backgroundImage: `${backgroundColor}, url(${background})` }}>
      <div class="hero-content">
        <h2>Rizwan Akhtar</h2>
        <hr />
        <h3>Full Stack Developer</h3>
        <Link to="contact_us" smooth={true} duration={1500}>
          <button 
            onMouseEnter={() => setColor('linear-gradient(rgb(253,213,177), rgba(0, 0, 0, 0.1))')}
            onMouseOut={() => setColor('linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2))')}
            >
              Contact Me
          </button>
        </Link>
      </div>
    
      </section>
    </>
  )
}

export default Hero