import './Navbar.css'
import logo from '../../Assets/hacker-news.svg'

const Navbar = () => {
    return (
        <nav className="nav-container">
            <img src={logo} alt="" />
        </nav>
    )
}

export default Navbar