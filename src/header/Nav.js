import { Link } from 'react-router-dom';
import './Header.css';

function Nav({ isOpen, onClose }) {
    return (
        <nav className={`links ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={onClose} aria-label="Fechar menu">×</button>
            <ul>
                <li><Link to="/" onClick={onClose}>Home</Link></li>
                <li><a href="" onClick={onClose}>About</a></li>
                <li><a href="" onClick={onClose}>Menu</a></li>
                <li><Link to="/booking" onClick={onClose}>Reservations</Link></li>
                <li><a href="" onClick={onClose}>Order Online</a></li>
                <li><a href="" onClick={onClose}>Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
