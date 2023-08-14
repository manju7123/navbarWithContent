import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const listColor = isDarkTheme ? 'list-dark-color' : 'list-light-color'
      const backgroundColor = isDarkTheme ? 'dark-color' : 'light-color'
      const homeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      return (
        <div className="home-container">
          <Navbar />
          <div className={`home-card ${backgroundColor}`}>
            <img className="home-img" src={homeImage} alt="home" />
            <h1 className={`home-title ${listColor}`}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
