import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import img from './logo.png';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
    weight: '',
    height: '',
    age: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
    weight: '',
    height: '',
    age: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      username: '',
      email: '',
      password: '',
      name: '',
      weight: '',
      height: '',
      age: '',
    };

    if (!formData.username || formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
      isValid = false;
    }

    if (!formData.email || !formData.email.includes('@')) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (!formData.name || !/^[a-zA-Z\s]*$/.test(formData.name)) {
      newErrors.name = 'Name must contain only letters';
      isValid = false;
    }

    if (!formData.weight || isNaN(formData.weight) || formData.weight < 1 || formData.weight > 300) {
      newErrors.weight = 'Weight must be between 1 and 300 kg';
      isValid = false;
    }

    if (!formData.height || isNaN(formData.height) || formData.height < 1 || formData.height > 230) {
      newErrors.height = 'Height must be between 1 and 230 cm';
      isValid = false;
    }

    if (!formData.age || isNaN(formData.age) || formData.age < 14 || formData.age > 79) {
      newErrors.age = 'Age must be between 14 and 79';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSignup = () => {
    const isValid = validateForm();

    if (isValid) {
      console.log('Signup Form Data:', formData);
      navigate('/Signin');
    }
  };

  return (
    <div className="whole2">
      <img src={img} style={{ height: "125px", marginLeft: "970px" }} />
      <div className="signpg">
        <h2 style={{ textAlign: "center" }}>Signup</h2>
        <br />
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <span style={{ color: 'red' }}>{errors.username}</span>
          </label>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              pattern="[a-zA-Z\s]*" // Allow only letters and spaces
              title="Name must contain only letters"
            />
            <span style={{ color: 'red' }}>{errors.name}</span>
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="14" // Set the minimum allowed value
              max="79" // Set the maximum allowed value
            />
            <span style={{ color: 'red' }}>{errors.age}</span>
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <span style={{ color: 'red' }}>{errors.email}</span>
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <span style={{ color: 'red' }}>{errors.password}</span>
          </label>
          <label>
            Weight (kg):
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              min="1" // Set the minimum allowed value
              max="300" // Set the maximum allowed value
            />
            <span style={{ color: 'red' }}>{errors.weight}</span>
          </label>
          <label>
            Height (cm):
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              min="1" // Set the minimum allowed value
              max="230" // Set the maximum allowed value
            />
            <span style={{ color: 'red' }}>{errors.height}</span>
          </label>
          <div className="button">
            <button type="button" onClick={handleSignup} className="btn btn-danger">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
