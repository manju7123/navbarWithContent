import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const backgroundColor = isDarkTheme ? 'nav-dark-color' : 'nav-light-color'
      const listColor = isDarkTheme ? 'list-dark-color' : 'list-light-color'
      const logoImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const themeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      return (
        <nav className={`nav-container ${backgroundColor}`}>
          <div className="">
            <img className="nav-logo" src={logoImage} alt="website logo" />
          </div>
          <ul className="list-items">
            <Link className="link-item" to="/">
              <li className={`item ${listColor}`}>Home</li>
            </Link>
            <Link className="link-item" to="/about">
              <li className={`item ${listColor}`}>About</li>
            </Link>
          </ul>
          <div className="">
            <button
              className="nav-btn"
              type="button"
              data-testid="theme"
              onClick={() => toggleTheme()}
            >
              <img className="nav-theme" src={themeImage} alt="theme" />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
