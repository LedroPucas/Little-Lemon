import './footer.css';
import restaurantImage from '../assets/restaurant.jpg';


function Footer() {
    const greet = 'greet';

    

    return (
        <footer>
            <div className="footerContent">
                <div className="footerLogo">
                    <img src={restaurantImage} alt="Restaurant" />
                </div>
                <div className="footerSection">
                    <h3>{greet}</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div className="footerSection">
                    <h3>Contact</h3>
                    <ul>
                        <li>Adress</li>
                        <li>phone number</li>
                        <li>email</li>
                    </ul>
                </div>
                <div className="footerSection">
                    <h3>Social Media Links</h3>
                    <ul>
                        <li>Adress </li >
                        <li>phone number</li>
                        <li>email</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
