import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SignupPage.css';

function SignupPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const bookingData = location.state?.bookingData;

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        specialRequest: ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }
        
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }
        
        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone number is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        }
        
        if (!formData.password || formData.password.length < 6) {
            newErrors.password = '6-character password is all you need';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            navigate('/booking/payment', { 
                state: { 
                    bookingData,
                    userData: formData 
                } 
            });
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-header">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
            </div>
            
            <div className="signup-content">
                <div className="signup-left">
                    <h3>Sign in to collect points</h3>

                    <form onSubmit={handleSubmit} className="signup-form">
                    <div className="form-group">
                        <input 
                            type="text"
                            placeholder="* First name"
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            className={errors.firstName ? 'error' : ''}
                        />
                        {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                    </div>

                    <div className="form-group">
                        <input 
                            type="text"
                            placeholder="* Last name"
                            value={formData.lastName}
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                            className={errors.lastName ? 'error' : ''}
                        />
                        {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                    </div>

                    <div className="form-group">
                        <input 
                            type="tel"
                            placeholder="* Phone Number"
                            value={formData.phoneNumber}
                            onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                            className={errors.phoneNumber ? 'error' : ''}
                        />
                        {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
                    </div>

                    <div className="form-group">
                        <input 
                            type="email"
                            placeholder="* Email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className={errors.email ? 'error' : ''}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group password-group">
                        <input 
                            type={showPassword ? "text" : "password"}
                            placeholder="* Password"
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                            className={errors.password ? 'error' : ''}
                        />
                        <button 
                            type="button" 
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label="Toggle password visibility"
                        >
                            {showPassword ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                    <circle cx="12" cy="12" r="3"/>
                                </svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                                    <line x1="1" y1="1" x2="23" y2="23"/>
                                </svg>
                            )}
                        </button>
                        {errors.password && <span className="error-message">{errors.password}</span>}
                        {!errors.password && <span className="helper-text">6-character password is all you need</span>}
                    </div>

                    <div className="form-group">
                        <textarea 
                            placeholder="Add a special request (optional)"
                            value={formData.specialRequest}
                            onChange={(e) => setFormData({...formData, specialRequest: e.target.value})}
                            rows="4"
                        />
                    </div>

                    <button type="submit" className="continue-btn">Continue</button>
                    </form>
                </div>

                <div className="signup-right">
                    <div className="signup-images">
                        <img src={require('../assets/Mario and Adrian A.jpg')} alt="Restaurant interior" />
                        <img src={require('../assets/restaurant chef B.jpg')} alt="Chef preparing food" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
