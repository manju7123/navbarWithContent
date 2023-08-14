import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const listColor = isDarkTheme ? 'list-dark-color' : 'list-light-color'
      const backgroundColor = isDarkTheme ? 'dark-color' : 'light-color'
      return (
        <div className="home-container">
          <Navbar />
          <div className={`home-card ${backgroundColor}`}>
            <img
              className="home-img"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={`not-found-title ${listColor}`}> Lost Your Way? </h1>
            <p className={`not-found-description ${listColor}`}>
              We cannot seem to find the page you are looking for.{' '}
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
