import { NavLink } from 'react-router-dom'
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa'
function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/">React Demo</NavLink>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">
                        <FaHome /> Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">
                        <FaInfoCircle /> About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">
                        <FaEnvelope /> Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar