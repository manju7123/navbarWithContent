import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const listColor = isDarkTheme ? 'list-dark-color' : 'list-light-color'
      const backgroundColor = isDarkTheme ? 'dark-color' : 'light-color'
      const aboutImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      return (
        <div className="home-container">
          <Navbar />
          <div className={`home-card ${backgroundColor}`}>
            <img className="home-img" src={aboutImage} alt="about" />
            <h1 className={`home-title ${listColor}`}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
