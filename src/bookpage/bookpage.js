import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './bookpage.css';

function BookPage({ availableTimes, updateTimes }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        diners: '',
        occasion: '',
        seatingStandard: true,
        seatingOutside: false
    });

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setFormData({...formData, date: selectedDate});
        updateTimes(selectedDate);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/booking/signup', { state: { bookingData: formData } });
    };

    return (
        <div className="booking-container">
            <div className="booking-header">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
            </div>
            
            <div className="booking-content">
                <div className="booking-left">
                    <h3>Find a table for any occasion</h3>
                    <form onSubmit={handleSubmit} className="booking-form">
                    <div className="form-row">
                        <select 
                            value={formData.date}
                            onChange={handleDateChange}
                            required
                        >
                            <option value="">Date</option>
                            <option value="2026-01-27">27/01/2026</option>
                            <option value="2026-01-28">28/01/2026</option>
                            <option value="2026-01-29">29/01/2026</option>
                            <option value="2026-01-30">30/01/2026</option>
                        </select>

                        <select 
                            value={formData.time}
                            onChange={(e) => setFormData({...formData, time: e.target.value})}
                            required
                        >
                            <option value="">Time</option>
                            {availableTimes.map((time) => (
                                <option key={time} value={time}>{time}</option>
                            ))}
                        </select>
                    </div>

                    <select 
                        value={formData.diners}
                        onChange={(e) => setFormData({...formData, diners: e.target.value})}
                        required
                    >
                        <option value="">Number of Diners</option>
                        <option value="1">1 people</option>
                        <option value="2">2 people</option>
                        <option value="3">3 people</option>
                        <option value="4">4 people</option>
                        <option value="5">5 people</option>
                        <option value="6">6 people</option>
                    </select>

                    <select 
                        value={formData.occasion}
                        onChange={(e) => setFormData({...formData, occasion: e.target.value})}
                        required
                    >
                        <option value="">Occasion</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="business">Business</option>
                        <option value="casual">Casual</option>
                    </select>

                    <div className="seating-options">
                        <h4>Seating options</h4>
                        <label className="seating-option">
                            <span>Standard</span>
                            <input 
                                type="checkbox"
                                checked={formData.seatingStandard}
                                onChange={(e) => setFormData({...formData, seatingStandard: e.target.checked})}
                            />
                        </label>
                        <label className="seating-option">
                            <span>Outside</span>
                            <input 
                                type="checkbox"
                                checked={formData.seatingOutside}
                                onChange={(e) => setFormData({...formData, seatingOutside: e.target.checked})}
                            />
                        </label>
                    </div>

                    <button type="submit" className="submit-btn">Lets go</button>
                    </form>
                </div>

                <div className="booking-right">
                    <div className="booking-images">
                        <img src={require('../assets/Mario and Adrian A.jpg')} alt="Restaurant interior" />
                        <img src={require('../assets/restaurant chef B.jpg')} alt="Chef preparing food" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookPage;
