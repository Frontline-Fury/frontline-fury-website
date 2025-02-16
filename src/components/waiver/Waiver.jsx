import React, { useState, useRef } from 'react';
import SignaturePad from 'react-signature-canvas';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './Waiver.css'

const Waiver = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    dob: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
    emergencyContact: '',
    emergencyPhone: '',
    agree: false,
    medicalCondition: '',
  });
  const [captchaValue, setCaptchaValue] = useState(null);
  const sigPad = useRef();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const signature = sigPad.current.getTrimmedCanvas().toDataURL('image/png');
    if (!captchaValue) {
      alert('Please complete the reCAPTCHA');
      return;
    }
    
    try {
      await axios.post('/send-email', { ...formData, signature });
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Failed to submit the form');
    }
  };

  return (
    <><><Navbar /><div className="waiver-container">
      <h1>CZ AIRSOFT 18+ STANDARD WAIVER</h1>
      <p>RELEASE OF LIABILITY</p>
      <form onSubmit={handleSubmit}>
        <label>Last Name *</label>
        <input type="text" name="lastName" onChange={handleChange} required />

        <label>First Name *</label>
        <input type="text" name="firstName" onChange={handleChange} required />

        <label>Date of Birth *</label>
        <input type="date" name="dob" onChange={handleChange} required />

        <label>Address</label>
        <input type="text" name="address" onChange={handleChange} />

        <label>City</label>
        <input type="text" name="city" onChange={handleChange} />

        <label>State</label>
        <input type="text" name="state" onChange={handleChange} />

        <label>Zip Code</label>
        <input type="text" name="zip" onChange={handleChange} />

        <label>Phone Number *</label>
        <input type="text" name="phone" onChange={handleChange} required />

        <label>Email *</label>
        <input type="email" name="email" onChange={handleChange} required />

        <label>Emergency Contact Name *</label>
        <input type="text" name="emergencyContact" onChange={handleChange} required />

        <label>Emergency Contact Phone *</label>
        <input type="text" name="emergencyPhone" onChange={handleChange} required />

        <label>
          <input type="checkbox" name="agree" onChange={handleChange} required /> I agree to the terms
        </label>

        <label>Do you have a medical condition?</label>
        <input type="radio" name="medicalCondition" value="Yes" onChange={handleChange} /> Yes
        <input type="radio" name="medicalCondition" value="No" onChange={handleChange} /> No

        <label>Signature *</label>
        <SignaturePad ref={sigPad} canvasProps={{ className: 'signature-pad' }} />
        <button type="button" onClick={() => sigPad.current.clear()}>Clear</button>

        <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" onChange={setCaptchaValue} />

        <button type="submit">Submit</button>
      </form>
    </div></><Footer /></>
  );
};

export default Waiver;
