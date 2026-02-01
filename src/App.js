import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Main from './main/Main';
import BookPage from './bookpage/bookpage';
import SignupPage from './bookpage/SignupPage';
import PaymentPage from './bookpage/PaymentPage';
import ConfirmedBooking from './bookpage/ConfirmedBooking';
import Footer from './footer/Footer';
import './App.css';

/* global fetchAPI, submitAPI */

const initializeTimes = () => {
  return ['1'];
};

function App() {
  const [availableTimes, setAvailableTimes] = useState(initializeTimes());

  useEffect(() => {
    if (typeof fetchAPI !== 'undefined') {
      const today = new Date();
      const times = fetchAPI(today);
      setAvailableTimes(times);
    }
  }, []);

  const updateTimes = (selectedDate) => {
    const dateObject = new Date(selectedDate);
    if (typeof fetchAPI !== 'undefined') {
      const times = fetchAPI(dateObject);
      setAvailableTimes(times);
      return times;
    }
    return availableTimes;
  };

  const submitForm = (formData) => {
    if(typeof submitAPI !== 'undefined') {
      return submitAPI(formData);
    }
    return true;
  };




  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<BookPage availableTimes={availableTimes} updateTimes={updateTimes} />} />
        <Route path="/booking/signup" element={<SignupPage />} />
        <Route path="/booking/payment" element={<PaymentPage submitForm={submitForm} />} />
        <Route path="/booking/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </div>
  );
}




export default App;
