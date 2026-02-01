import { Link } from 'react-router-dom';
import './main.css'
import heroImage from '../assets/bruscheta.png'
import greekSalad from '../assets/greeksalad.png'
import bruschetta from '../assets/bruscheta2.png'
import lemonDessert from '../assets/lemondessert.png'
import testimonial1 from '../assets/testimonial1.jpg'
import testimonial2 from '../assets/testimonial2.jpg'
import testimonial3 from '../assets/testimonial3.jpg'
import testimonial4 from '../assets/testimonial4.jpg'
import marioAdrian from '../assets/Mario and Adrian A.jpg'
import restaurantChef from '../assets/restaurant chef B.jpg'

function Main(){
    return(
        <main>
            <div className="firstPart">
                <div className='Description'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Little Lemon is a charming Italian restaurant located in the heart of Chicago. Our restaurant offers a unique dining experience with its authentic Italian cuisine and warm, inviting atmosphere. We are committed to providing our customers with the best possible dining experience, and we invite you to join us for a memorable meal.</p>
                    <Link to="/booking">
                        <button>Reserve a Table</button>
                    </Link>
                </div>
                <img src={heroImage} alt="bruschetta"/>
            </div>
            <div className="specials">
                <div className="headerSpecial">
                    <h1>This Week's Specials!</h1>
                    <button>Online Menu</button>
                </div>
                <div className='cardsSpecial'>
                    <div className='card'>
                        <img src={greekSalad} alt="greek salad"/>
                        <div className='info'>
                            <div className='title-row'>
                                <h3>Greek salad</h3>
                                <span className='price'>$12.99</span>
                            </div>
                            <p className='description'>
                                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                            </p>
                            <button className='order-btn'>Order a delivery 🛵</button>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={bruschetta} alt="bruschetta"/>
                        <div className='info'>
                            <div className='title-row'>
                                <h3>Bruschetta</h3>
                                <span className='price'>$5.99</span>
                            </div>
                            <p className='description'>
                                Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                            </p>
                            <button className='order-btn'>Order a delivery 🛵</button>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={lemonDessert} alt="lemon dessert"/>
                        <div className='info'>
                            <div className='title-row'>
                                <h3>Lemon Dessert</h3>
                                <span className='price'>$5.00</span>
                            </div>
                            <p className='description'>
                                This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                            </p>
                            <button className='order-btn'>Order a delivery 🛵</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonials">
                <h1>Testimonials</h1>
                <div className="testimonialsContainer">
                    <div className='testimonial 1'>
                        <p>4.5/5 ★</p>
                        <div className="image">
                            <img src={testimonial1} alt="" />
                            <p>Alex</p>
                        </div>
                        <p>I loved the service.</p>
                    </div>
                    <div className='testimonial 2'>
                        <p>5/5 ★</p>
                        <div className="image">
                            <img src={testimonial2} alt="" />
                            <p>Emma</p>
                        </div>
                        <p>the food was delicious!</p>
                    </div>
                    <div className='testimonial 3'>
                        <p>5/5 ★</p>
                        <div className="image">
                            <img src={testimonial3} alt="" />
                            <p>Oliver</p>
                        </div>
                        <p>the service was great!</p>
                    </div>
                    <div className='testimonial 4'>
                        <p>5/5 ★</p>
                        <div className="image">
                            <img src={testimonial4} alt="" />
                            <p>Charlotte</p>
                        </div>
                        <p>I liked how practical it was.</p>
                    </div>
                </div>

            </div>
            <div className="about">
                <div className="aboutContent">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    </p>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    </p>
                </div>
                <div className="aboutImages">
                    <img src={marioAdrian} alt="Mario and Adrian" className="image1" />
                    <img src={restaurantChef} alt="Restaurant Chef" className="image2" />
                </div>
            </div>
        </main>
    )
}

export default Main