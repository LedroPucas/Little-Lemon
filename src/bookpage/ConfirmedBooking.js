import { useLocation, useNavigate } from 'react-router-dom';
import './ConfirmedBooking.css';

function ConfirmedBooking() {
    const location = useLocation();
    const navigate = useNavigate();
    const bookingData = location.state?.bookingData;
    const userData = location.state?.userData;

    if (!bookingData || !userData) {
        navigate('/');
        return null;
    }

    return (
        <div className="confirmed-container">
            <div className="confirmed-content">
                <div className="success-icon">✓</div>
                <h1>Reserva Confirmada!</h1>
                <p className="success-message">
                    Sua reserva foi confirmada com sucesso. Enviamos um e-mail de confirmação para {userData.email}.
                </p>

                <div className="booking-summary-confirmed">
                    <h2>Detalhes da Reserva</h2>
                    <div className="detail-row">
                        <span className="detail-label">Data:</span>
                        <span className="detail-value">{bookingData.date}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Horário:</span>
                        <span className="detail-value">{bookingData.time}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Número de pessoas:</span>
                        <span className="detail-value">{bookingData.diners}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Ocasião:</span>
                        <span className="detail-value">{bookingData.occasion}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Nome:</span>
                        <span className="detail-value">{userData.firstName} {userData.lastName}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Telefone:</span>
                        <span className="detail-value">{userData.phoneNumber}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">E-mail:</span>
                        <span className="detail-value">{userData.email}</span>
                    </div>
                </div>

                <button onClick={() => navigate('/')} className="home-btn">
                    Voltar para Home
                </button>
            </div>
        </div>
    );
}

export default ConfirmedBooking;
