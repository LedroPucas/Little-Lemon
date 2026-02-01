import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './PaymentPage.css';

function PaymentPage({ submitForm }) {
    const navigate = useNavigate();
    const location = useLocation();
    const bookingData = location.state?.bookingData;
    const userData = location.state?.userData;

    const [formData, setFormData] = useState({
        cardNumber: '',
        cardName: '',
        expDate: '',
        cvv: '',
        confirmText: false,
        confirmEmail: false
    });

    const [errors, setErrors] = useState({});

    const formatCardNumber = (value) => {
        const cleaned = value.replace(/\s/g, '');
        const match = cleaned.match(/.{1,4}/g);
        return match ? match.join(' ') : cleaned;
    };

    const handleCardNumberChange = (e) => {
        const value = e.target.value.replace(/\s/g, '');
        if (value.length <= 16 && /^\d*$/.test(value)) {
            setFormData({...formData, cardNumber: formatCardNumber(value)});
        }
    };

    const handleExpDateChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.slice(0, 2) + ' / ' + value.slice(2, 6);
        }
        setFormData({...formData, expDate: value});
    };

    const handleCvvChange = (e) => {
        const value = e.target.value;
        if (value.length <= 3 && /^\d*$/.test(value)) {
            setFormData({...formData, cvv: value});
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.cardNumber || formData.cardNumber.replace(/\s/g, '').length !== 16) {
            newErrors.cardNumber = 'Card number is required';
        }
        
        if (!formData.cardName.trim()) {
            newErrors.cardName = 'Name is required';
        }
        
        if (!formData.expDate || formData.expDate.length < 7) {
            newErrors.expDate = 'Expiration date is required';
        }
        
        if (!formData.cvv || formData.cvv.length !== 3) {
            newErrors.cvv = 'CVV is required';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
        // Combinar todos os dados
        const completeFormData = {
            ...bookingData,
            ...userData,
            payment: {
                cardNumber: formData.cardNumber,
                cardName: formData.cardName,
                expDate: formData.expDate,
                cvv: formData.cvv
            }
        };
        
        // Chamar submitForm
        const success = submitForm(completeFormData);
        
        if (success) {
            navigate('/booking/confirmed', { 
                state: { 
                    bookingData,
                    userData 
                } 
            });
        }
    }
};

    const getBookingDetails = () => {
        if (!bookingData) return 'Nenhum detalhe de reserva';
        
        const { date, time, diners } = bookingData;
        return `${date} - ${time} - ${diners} ${diners === '1' ? 'pessoa' : 'pessoas'}`;
    };

    return (
        <div className="payment-container">
            <div className="payment-header">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
            </div>
            
            <div className="payment-content">
                <div className="payment-left">
                    <div className="booking-details-section">
                    <h3>Booking details</h3>
                    <div className="booking-summary">
                        <span>{getBookingDetails()}</span>
                        <button type="button" className="dropdown-icon">▼</button>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="payment-form">
                    <h3>Credit Card details</h3>
                    
                    <div className="form-group">
                        <input 
                            type="text"
                            placeholder="*Card Number"
                            value={formData.cardNumber}
                            onChange={handleCardNumberChange}
                            className={errors.cardNumber ? 'error' : ''}
                        />
                        {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
                    </div>

                    <div className="form-group">
                        <input 
                            type="text"
                            placeholder="* First Name / Last Name"
                            value={formData.cardName}
                            onChange={(e) => setFormData({...formData, cardName: e.target.value})}
                            className={errors.cardName ? 'error' : ''}
                        />
                        {errors.cardName && <span className="error-message">{errors.cardName}</span>}
                    </div>

                    <div className="card-details-row">
                        <div className="form-group">
                            <label>Exp Date</label>
                            <input 
                                type="text"
                                placeholder="MM / YYYY"
                                value={formData.expDate}
                                onChange={handleExpDateChange}
                                className={errors.expDate ? 'error' : ''}
                            />
                        </div>

                        <div className="form-group">
                            <label>CVV</label>
                            <input 
                                type="text"
                                placeholder="***"
                                value={formData.cvv}
                                onChange={handleCvvChange}
                                className={errors.cvv ? 'error' : ''}
                            />
                        </div>

                        <button type="button" className="scan-btn" aria-label="Scan card">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="5" width="20" height="14" rx="2"/>
                                <line x1="2" y1="10" x2="22" y2="10"/>
                            </svg>
                        </button>
                    </div>

                    <div className="confirmation-options">
                        <label className="confirmation-option">
                            <input 
                                type="checkbox"
                                checked={formData.confirmText}
                                onChange={(e) => setFormData({...formData, confirmText: e.target.checked})}
                            />
                            <span>Send me booking confirmation via text</span>
                        </label>
                        
                        <label className="confirmation-option">
                            <input 
                                type="checkbox"
                                checked={formData.confirmEmail}
                                onChange={(e) => setFormData({...formData, confirmEmail: e.target.checked})}
                            />
                            <span>Send me booking confirmation via email</span>
                        </label>
                    </div>

                    <button type="submit" className="book-btn">Book</button>
                    </form>
                </div>

                <div className="payment-right">
                    <div className="payment-images">
                        <img src={require('../assets/Mario and Adrian A.jpg')} alt="Restaurant interior" />
                        <img src={require('../assets/restaurant chef B.jpg')} alt="Chef preparing food" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;
