import { Link } from 'react-router-dom';
import './Header.css';

function Nav({ isOpen, onClose }) {
    return (
        <nav className={`links ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={onClose} aria-label="Fechar menu">×</button>
            <ul>
                <li><Link to="/" onClick={onClose}>Home</Link></li>
                <li><button onClick={onClose} className="nav-button">About</button></li>
                <li><button onClick={onClose} className="nav-button">Menu</button></li>
                <li><Link to="/booking" onClick={onClose}>Reservations</Link></li>
                <li><button onClick={onClose} className="nav-button">Order Online</button></li>
                <li><button onClick={onClose} className="nav-button">Login</button></li>
            </ul>
        </nav>
    );
}

export default Nav;
