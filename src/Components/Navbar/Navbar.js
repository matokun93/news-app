import useDarkMode from '../../CustomHooks/useDarkMode'
import './Navbar.css'
import logo from '../../Assets/hacker-news.svg'
import moon from '../../Assets/moon-solid.svg'

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode()

    const changeTheme = () => {
        setDarkMode(darkMode => !darkMode)
    }

    return (
        <div className="nav-container">
            <nav>
                <img src={logo} alt="logo" />
                <div className="theme-button">
                    <img src={moon} alt='moon-icon' />
                    <div className="slider-container" onClick={() => changeTheme()}>
                        <div className={darkMode === false ? 'slider' : 'slider slider-right'}></div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar