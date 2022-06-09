import useDarkMode from '../../CustomHooks/useDarkMode'
import './Navbar.css'
import logo from '../../Assets/hacker-news.svg'
import logoDark from '../../Assets/hacker-news-dark.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode()

    const changeTheme = () => {
        setDarkMode(darkMode => !darkMode)
    }

    return (
        <div className="nav-container">
            <nav>
                <img src={darkMode ? logoDark : logo} alt="logo" />
                <div className="theme-button">
                    <span className='moon-icon'>
                        <FontAwesomeIcon icon={faMoon} />
                    </span>
                    <div className="slider-container" onClick={() => changeTheme()}>
                        <div className={darkMode === false ? 'slider' : 'slider slider-right'}></div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar