import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/users/add', { name })
            .then(response => {
                console.log(response.data);
                navigate('/');
            })
            .catch(error => console.log(error));
        setName('');
    }

    return (
        <div>
            <h2>Add New User</h2>
            <form onSubmit={handleSubmit}>
                <label>User Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter user name"
                    required
                />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
}

export default AddUser;
