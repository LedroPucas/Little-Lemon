import { useState } from 'react';
import logo from '../assets/littlelemonlogo.png';
import Nav from './Nav';
import './Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <img src={logo} alt="Little Lemon Logo" />
            <button className={`hamburger ${isMenuOpen ? 'hidden' : ''}`} onClick={toggleMenu} aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <Nav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            {isMenuOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>}
        </header>
    );
}

export default Header;
