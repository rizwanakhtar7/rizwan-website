import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaTimes, FaGripLines } from 'react-icons/fa';


function Nav() {
  const [showColor, setShowColor] = React.useState(false)
  const [hamburgerShow, setHamburgerShow] = React.useState(true)

  const handleClick = () => {
    setHamburgerShow(!hamburgerShow)
    console.log('CLICKED!')
  }

  React.useEffect(() => {
    const scrollListener = () => {
      (window.scrollY > 120) ? setShowColor(true) : setShowColor(false)
    }
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <nav className={`${showColor ? 'navbar-show-color' : 'navbar-default-color'}`}>
      <button className="brand-logo" onClick={() => scroll.scrollToTop()} >R - A</button>
      <ul className="nav-links">
        <li className="nav-item">About Me</li>
        <li className="nav-item">My Skills</li>
        <li className="nav-item">Portfolios</li>
      </ul>
      <div className="menu-icon" onClick={handleClick}>
        {hamburgerShow ? <FaGripLines className="fa-icon"/> : <FaTimes className="fa-icon"/> } 
      </div>


    </nav>
  )
}

export default Nav