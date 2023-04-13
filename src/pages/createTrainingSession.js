import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        date: '',
        description: '',
        hours: '',
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
                    <label> Date:</label>
                    <input
                        type="text"
                        name="date"
                        value={formData.date}
                        class="input"
                        onChange={handleInputChange}
                    />
                </div>
                <br />

                <div class="form-group">
                    <label> Description: </label>
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        class="input"
                        onChange={handleInputChange}
                    />
                </div>

                <br />

                <div class="form-group">
                    <label>
                        Hours:
                    </label>
                    <input
                        type="email"
                        name="hours"
                        value={formData.hours}
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