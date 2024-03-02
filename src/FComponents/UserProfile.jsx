import { useState, useEffect } from "react";
import "./Register.css";

function UserProfile({ username }) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const storedUserData = localStorage.getItem("users");
    if (storedUserData) {
      const users = JSON.parse(storedUserData);
      const userProfile = users.find(user => user.username === username);
      if (userProfile) {
        setUserData(userProfile);
      }
    }
  }, [username]);

  const handleLogout = () => {
    // Reset the session logic here
    // For example, clear the session storage
    sessionStorage.clear();
    setUserData({});

    // Redirect to a different page
    window.location.href = "/";
  };

  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {userData.username}</p>
      <p>Password: {userData.password}</p>
      <p>First Name: {userData.firstname}</p>
      <p>Last Name: {userData.lastname}</p>
      <p>Email: {userData.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserProfile;
