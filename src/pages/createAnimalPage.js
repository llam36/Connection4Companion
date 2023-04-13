import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        hoursTrained: '',
        dateOfBirth: '',
    });

    const [isSignedIn, setSignedIn] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData.firstName);

        /*const body = {
            name: formData.name,
            hoursTrained: formData.hoursTrained,
            dateOfBirth: formData.dateOfBirth,
        };


        try {
            const res = axios.post("/api/user", body);
            console.log(res);
            setSignedIn(true);
        } catch (e) {
            console.log(e);
        }*/
    };

    return (
        <form onSubmit={handleSubmit}>
            <center>

                <div class="form-group">
                    <label> Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        class="input"
                        onChange={handleInputChange}
                    />
                </div>
                <br />

                <div class="form-group">
                    <label> Hours Trained: </label>
                    <input
                        type="text"
                        name="hoursTrained"
                        value={formData.hoursTrained}
                        class="input"
                        onChange={handleInputChange}
                    />
                </div>

                <br />

                <div class="form-group">
                    <label>
                        Date of Birth: 
                    </label>
                    <input
                        type="email"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        class="input"
                        onChange={handleInputChange}
                    />
                </div>

                <br />

                <br />
                <button href="/index" type="submit" class="search">Submit</button>

            </center>
        </form>
    );
}

export default RegistrationForm;