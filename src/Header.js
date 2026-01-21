import logo from './assets/725cbe0ca5da8536fc99c51e00d4d13628bd9745 2.png';
import Nav from './Nav';

function Header() {
    return (
        <header>
            <img src={logo} alt="Little Lemon Logo" />
            <Nav/>
        </header>
    );
}

export default Header;
