import React, { useState } from 'react';
import Pic from '../Pictures/Fitnessbanner.jpg';
import './Franchise.css';

const Franchise = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'number' ? Number(value) : value, // Convert value to number for the mobile number field
    }));
  };
  

  const handleSubmit = async () => {
   
      try {
        // Prepare headers
        const headers = {
          'Authorization': 'Bearer YourAccessToken',
          'Content-Type': 'application/json'
        };
  
        // Send signup data to the server
        const response = await fetch("http://localhost:8080/create", {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(formData)
        });
  
        // Retrieve response data
        const responseData = await response.json();
  
        // Log the signup response
        console.log("Signup response:", responseData);
  
        // Navigate to the signin page
      } catch (error) {
        // Handle errors
        console.error("Error signing up:", error);
      }
    
  };

  return (
    <>
      <div>
        <img className='hi' src={Pic} alt='Fitness Banner' />
        <br />
        <br />
        <center>
          <h1 className='font'>READY TO OWN A FRANCHISE WITH US?</h1>
          <br />
          <div className='franchise-page'>
            <p className='fontform'>Interested in joining our franchise? Fill out the form below:</p>
            <br />
            <form className='fontform' onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <br />
              <label>
                Email
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <br />
              <label>
                Mobile Number
                <input
                  type='tel'
                  name='number'
                  value={formData.number}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                City
                <br />
                <select name='city' value={formData.city} onChange={handleChange} required>
                  <option value=''>--Please choose an option--</option>
                  <option value='Bangalore'>Bangalore</option>
                  <option value='Chennai'>Chennai</option>
                  <option value='Hyderabad'>Hyderabad</option>
                  <option value='Mumbai'>Mumbai</option>
                  <option value='Pune'>Pune</option>
                </select>
              </label>
              <br />
              <button type='submit'>Submit</button>
            </form>
          </div>
        </center>
      </div>
    </>
  );
};

export default Franchise;
