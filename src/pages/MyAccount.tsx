
import React from 'react';
import './App.css';

function App() {
  const user = {
    fullname: 'John Doe',
    language: 'English',
    city: 'New York',
    email: 'johndoe@example.com',
  };

  return (
    <div className="app">
      <h1>User Information</h1>
      <UserCard user={user} />
    </div>
  );
}

const user = {
    fullname: 'John Doe',
    language: 'English',
    city: 'New York',
    email: 'johndoe@example.com',
  };

function getUser() {
  const user = {
    fullname: 'John Doe',
    language: 'English',
    city: 'New York',
    email: 'johndoe@example.com',
  };

  return (
    <div className="app">
      <h1>User Information</h1>
      <UserCard user={user} />
    </div>
  );
}

function UserCard({ user }) {
    return (
      <div className="user-card">
        <div className="info">
          <label>Fullname:</label>
          <div className="box">{user.fullname}</div>
        </div>
        <div className="info">
          <label>Language:</label>
          <div className="box">{user.language}</div>
        </div>
        <div className="info">
          <label>City:</label>
          <div className="box">{user.city}</div>
        </div>
        <div className="info">
          <label>Email:</label>
          <div className="box">{user.email}</div>
        </div>
      </div>
    );
  }
  export default App;
