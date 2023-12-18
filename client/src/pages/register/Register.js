import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";

function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  // register user
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
      });
      const data = res.data;
      console.log(data);
      if (data.success) {
        navigate("/login");
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          className="registerInput"
          id="username"
          name="username"
          type="text"
          required
          placeholder="Enter your username..."
          onChange={onChange}
        />
        <label htmlFor="email">Email</label>
        <input
          className="registerInput"
          id="email"
          name="email"
          type="text"
          required
          placeholder="Enter your email..."
          onChange={onChange}
        />
        <label htmlFor="password">Password</label>
        <input
          className="registerInput"
          id="password"
          name="password"
          type="password"
          required
          placeholder="Enter your password..."
          onChange={onChange}
        />
        <Button
          type="submit"
          className="registerButton"
          variant="contained"
          endIcon={<LoginIcon />}
        >
          Register
        </Button>
      </form>

      {error && (
        <span style={{ color: "red", textAlign: "center", marginTop: "15px" }}>
          Username or Email already exists.
        </span>
      )}
    </div>
  );
}

export default Register;
