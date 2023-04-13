import React, { useState } from 'react';
import axios from 'axios'; 

function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    admin: false, 
  });

  const [isSignedIn, setSignedIn] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    const body = {
      email: formData.email,
      password: formData.password,
      admin: formData.admin
    };

    try{
        const res = axios.post("/api/user/verify", body);
        console.log(res);
        setSignedIn(true)
    } catch (e) {
        console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <center>
      
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

        <div class = "form-group">
      <label>
        Admin:
        </label>
        <input
          type="checkbox"
          name="admin"
          value={formData.admin}
          class="input"
          onChange={handleInputChange}
        />
        </div>

      <br />
      <button href="/index" type="submit" class = "search">Submit</button>
      <div>
        {isSignedIn ? <p>Successfully Signed In </p> : <p> Not Signed In Yet</p>}
      </div> 
      
      </center>
    </form>
  );
}

export default RegistrationForm;