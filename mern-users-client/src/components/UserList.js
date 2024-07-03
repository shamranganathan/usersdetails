import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/users/')
            .then(response => setUsers(response.data))
            .catch(error => console.log(error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/users/${id}`)
            .then(response => setUsers(users.filter(user => user._id !== id)))
            .catch(error => console.log(error));
    }

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        <span>{user.name}</span>
                        <span>{user.friends.map(friend => friend.name).join(', ')}</span>
                        <div>
                            <Link to={`/edit/${user._id}`}>Edit</Link>
                            <button onClick={() => handleDelete(user._id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
            <Link to="/add">Add User</Link>
        </div>
    );
}

export default UserList;
