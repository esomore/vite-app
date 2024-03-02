import React, { useState, useEffect } from "react";
import "./Register.css";

function Register() {
  // Initialize state variables using useState hook
  const [values, setValues] = useState({
    username: "",
    password: "",
    validpassword: "",
    firstname: "",
    lastname: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({}); // State to track form errors

  // Destructure state variables for easier access
  const { username, password, validpassword, firstname, lastname, email } =
    values;

  // useEffect for validation
  useEffect(() => {
    const errors = {};

    // Simple validation checks
    if (!username) errors.username = "Username is required";
    if (!email.includes("@")) errors.email = "Invalid email format";
    if (password !== validpassword)
      errors.validpassword = "Passwords must match";

    setFormErrors(errors);
  }, [username, password, validpassword, email]); // Run effect when these fields change

  // useEffect hook to run side effect when component mounts
  useEffect(() => {
    // Retrieve users from local storage when component mounts
    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log("Users:", users);
  }, []); // Empty dependency array means this effect runs only once after the initial render

  function registerUser(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    // Retrieve existing users from local storage or initialize to an empty array
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Append the new user to the existing users array
    const updatedUsers = [...existingUsers, formJson];

    // Save the updated users array to local storage
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  }

  return (
    <form onSubmit={registerUser}>
      <h1>Enter Your Details</h1>
      <label htmlFor="username">User Name</label>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
        required
        placeholder="User Name"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="*******"
        required
        value={password}
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
      />
      <label htmlFor="validpassword">Password Authentication</label>
      <input
        type="password"
        name="validpassword"
        id="validpassword"
        placeholder="******"
        value={validpassword}
        required
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
      />

      <label htmlFor="firstname">First Name:</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        value={firstname}
        placeholder="first name"
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
        required
      />
      <label htmlFor="lastname">Last Name:</label>
      <input
        type="text"
        id="lastname"
        name="lastname"
        value={lastname}
        placeholder="Last name"
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
      />
      {formErrors.username && <p className="error">{formErrors.username}</p>}
      {formErrors.email && <p className="error">{formErrors.email}</p>}
      {formErrors.validpassword && (
        <p className="error">{formErrors.validpassword}</p>
      )}

      <button type="submit" disabled={Object.keys(formErrors).length > 0}>
        Register
      </button>
    </form>
  );
}

export default Register;
