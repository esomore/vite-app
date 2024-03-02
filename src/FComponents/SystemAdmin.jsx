import React from "react";
const SystemAdmin = () => {
  const [users, setUsers] = useState("");

  const handleUpdateUser = (userId) => {
    
  };

  const handleDeleteUser = (userId) => {
    // Call API to delete user
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.fullName}</td>
            <td>{user.email}</td>
            <td>
              <button onClick={() => handleUpdateUser(user.id)}>
                Update Details
              </button>
              <button onClick={() => handleDeleteUser(user.id)}>
                Delete User
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
