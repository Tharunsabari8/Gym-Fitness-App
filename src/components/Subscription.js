import React, { useState } from 'react';
import axios from 'axios'
import './Subscription.css';

const SubscriptionPage = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Plan: '',
    Cardnumber: '',
    Expiration: '',
    Cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'Cardnumber' || name === 'Cvv' ? Number(value) : value,
    }));
    console.log('Form Data:', formData); // Log the form data
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Prepare headers
      const headers = {
        'Authorization': 'Bearer YourAccessToken',
        'Content-Type': 'application/json'
      };

      // Send signup data to the server
      const response = await axios.post("http://localhost:8080/subscription",formData)
      console.log(response);
      // Retrieve response data
      const responseData = await response.json();

      // Log the signup response
      console.log("Signup response:", responseData);

      // Navigate to the signin page or handle response as needed
    } catch (error) {
      // Handle errors
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="whole3">
      <marquee behavior="scroll" direction="left" className="marquee-text">
        Subscribe to Our Fitness App Now and Get Exclusive Benefits!
      </marquee>
      <div className="subscription-page">
        <h2>Subscribe to Our Fitness App</h2>
        <p>Get access to exclusive workouts, nutrition plans, and more!</p>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="Name" value={formData.Name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="Email" value={formData.Email} onChange={handleChange} required />
          </label>
          <label>
            Subscription Plan:
            <select name="Plan" value={formData.Plan} onChange={handleChange} required>
              <option value="">-- Please choose an option --</option>
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
              <option value="pro">Pro</option>
            </select>
          </label>
          <label>
            Card Number:
            <input type="text" name="Cardnumber" value={formData.Cardnumber} onChange={handleChange} required />
          </label>
          <label>
            Expiration Date:
            <input type="text" name="Expiration" placeholder="MM/YYYY" value={formData.Expiration} onChange={handleChange} required />
          </label>
          <label>
            CVV:
            <input type="text" name="Cvv" value={formData.Cvv} onChange={handleChange} required />
          </label>
          <center>
            <button type="submit">Subscribe Now</button>
          </center>
        </form>
      </div>
      {/* Additional content like table and styles */}
    </div>
  );
};

export default SubscriptionPage;
