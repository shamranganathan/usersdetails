import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import './App.css'; // Import your CSS file

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>MERN User Management</h1>
            </header>
            <main className="App-main">
                <Routes>
                    <Route path="/" element={<UserList />} />
                    <Route path="/add" element={<AddUser />} />
                    <Route path="/edit/:id" element={<EditUser />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
