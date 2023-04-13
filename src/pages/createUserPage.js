import React, { useState } from 'react';
import axios from 'axios'; 

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData.firstName);

    const body = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };


    try{
        const res = axios.post("/api/user", body);
        console.log(res);
    } catch (e) {
        console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <center>
      
        <div class = "form-group">
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          class = "input"
          onChange={handleInputChange}
        />
        </div>
      <br />
      
      <div class = "form-group">
      <label> Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          class = "input"
          onChange={handleInputChange}
        />
        </div>
      
      <br />
      
      <div class = "form-group">
      <label>
        Email Address:
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          class = "input"
          onChange={handleInputChange}
        />
        </div>
      
      <br />
      
      <div class = "form-group">
      <label>
        Password:
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          class = "input"
          onChange={handleInputChange}
        />
        </div>

      <br />
      <button type="submit" class = "search">Submit</button>
      </center>
    </form>
  );
}

export default RegistrationForm;