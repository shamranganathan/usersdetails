import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/users/${id}`)
            .then(response => {
                setName(response.data.name);
                setFriends(response.data.friends);
            })
            .catch(error => console.log(error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/users/update/${id}`, { name, friends })
            .then(response => {
                console.log(response.data);
                navigate('/');
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <label>User Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter user name"
                    required
                />
                <button type="submit">Update User</button>
            </form>
        </div>
    );
}

export default EditUser;
