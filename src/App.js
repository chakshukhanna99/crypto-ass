// App.js
import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        { username, password }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        { username, password }
      );
      const accessToken = response.data.accessToken;
      setMessage(`Logged in successfully. Access Token: ${accessToken}`);
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div className="App">
    <h1>Web application that implements JSON web token</h1>
      <h1 className="head">User Registration and Login</h1>
      <div className="form-container">
        <h1 className="name">Chakshu Khanna(21BCE5872)</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <div>
          <button onClick={handleRegister} className="btn-register">
            Register
          </button>
          <button onClick={handleLogin} className="btn-login">
            Login
          </button>
        </div>
    
      </div>
      {message && <p className="message">{message}</p>}
  
    </div>
  );
}

export default App;
