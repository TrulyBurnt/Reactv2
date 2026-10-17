
import { Link } from "react-router-dom"

function Navbar() {
    return(
        <nav className="navbar">
            <div className="logo">
                MyWebsite
            </div>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/services">Services</Link>
            </div>
        </nav>
    )
}

export default Navbar