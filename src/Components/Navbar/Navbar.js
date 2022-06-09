import './Navbar.css'
import logo from '../../Assets/hacker-news.svg'

const Navbar = () => {
    return (
        <div className="nav-container">
            <nav>
                <img src={logo} alt="logo" />
            </nav>
        </div>
    )
}

export default Navbar