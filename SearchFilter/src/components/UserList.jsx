import React from 'react'

export default function UserList({ users }) {
  if (!users.length) {
    return <p>No users found.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {users.map((user, index) => (
        <li
          key={index}
          style={{
            padding: "10px",
            marginBottom: "8px",
            border: "1px solid #ccc",
            borderRadius: "8px"
          }}
        >
          <strong>{user.name}</strong>
          <br />
          <span>{user.email}</span>
        </li>
      ))}
    </ul>
  );
}
