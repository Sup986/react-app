import React, { useState } from 'react';
import UserList from './components/UserList';
import Grid from './components/Grid';
import Modal from './components/Modal';
import './App.css';

const App = () => {
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const addUser = (user) => {
        console.log("User added:", user);
        setUsers(prevUsers => [...prevUsers, user]);
    };

    const resetGame = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setUsers([]);
    };

    return (
        <div className="app-container">
            <UserList addUser={addUser} />
            <div className="user-list">
                {users.map((user, index) => (
                    <div key={index} className="user-item">
                        {user.name} - {user.gender}
                    </div>
                ))}
            </div>
            <div className="grid-container">
                <Grid users={users} resetGame={resetGame} />
            </div>
            <Modal show={showModal} onClose={handleModalClose} />
        </div>
    );
};

export default App;
