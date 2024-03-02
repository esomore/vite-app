import UserProfile from '../FComponents/UserProfile';
import Login from '../FComponents/Login';
import Register from '../FComponents/Register'; // Import the Register component
import React, { useState } from 'react'; // Import the useState hook

export function Main() {
    // Add the showRegister state variable and handleRegisterClick function
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const username = sessionStorage.getItem('username'); // Get the username from sessionStorage
    // Initialize the showRegister state variable to false
    const [showRegister, setShowRegister] = useState(false);

    const handleRegisterClick = () => {
        setShowRegister(true);
    };

    return (
        <div>
            <h1>Users Management App</h1>
            {isLoggedIn ? (
                <UserProfile username={username} /> // Pass the username to the UserProfile component
            ) : showRegister ? (
                <Register />
            ) : (
                <Login />
            )}
            {!isLoggedIn && !showRegister && (
                <button onClick={handleRegisterClick}>Register</button>
            )}
        </div>
    );
}
