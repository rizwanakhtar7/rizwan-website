import React from 'react'
import projectOne from './assets/images/2048.png'
import superheroTopTrumps from './assets/images/superhero.png'
import moodflix from './assets/images/moodflix.png'
import eLearn from './assets/images/e-learn.png'


function Project() {
  //state to track if image inView(false by default)
  const [inView, setInView] = React.useState(false)

  //Track where on page the image is
  const imageRef = React.useRef(null)


  const isWithinView = () => {
    
    const rect = imageRef.current.getBoundingClientRect()
    return rect.top >=0 && rect.bottom <= window.innerHeight
  }
 

  React.useEffect(() => {
    setInView(isWithinView())
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const scrollHandler = () => {
    //Calculate whenever in view
    setInView(isWithinView())
  }



  return (
    <>
      <section id="projects" className="project-section">
        <h1 ref={imageRef} className={inView ? `red-color`: `default-color`}>My Projects</h1>
        <hr />
        <div className="row">
          <div className="column">
            <div className="blue-column">
              <img ref={imageRef} className="placeholder_img" width="550" height="400" src={inView ? `${projectOne}` : `NOOO`} alt="" style={{ objectFit:"contain" }}/>
            </div>
          </div>
          <div className="column">
            <div className="red-column">
              <h2>Project 1 : 2048</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </div>
          </div>
          
        </div>

        <div className="row">
          <div className="column">
            <div className="red-column">
              <h2>Project 2 : Superhero Top Trumps</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </div>
          </div>
          <div className="column">
            <div className="blue-column">
              <img className="placeholder_img" width="550" height="400" src={`${superheroTopTrumps}`} alt="" style={{ objectFit:"contain" }}/>
            </div>
          </div>
          
        </div>

        <div className="row">
          <div className="column">
            <div className="blue-column">
              <img className="placeholder_img" width="550" height="400" src={`${moodflix}`} alt="" style={{ objectFit:"contain" }}/>
            </div>
          </div>
          <div className="column">
            <div className="red-column">
              <h2>Project 3 : Moodflix</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </div>
          </div>
          
        </div>

        <div className="row">
          <div className="column">
            <div className="red-column">
              <h2>Project 4 : E-Learn</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </div>
          </div>
          <div className="column">
            <div className="blue-column">
              <img className="placeholder_img" width="550" height="400" src={`${eLearn}`} alt="" style={{ objectFit:"contain" }}/>
            </div>
          </div>
          
        </div>
        
      </section>
    </>
  )
}

export default Project