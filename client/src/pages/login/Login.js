import React, { useContext, useState } from "react";
import "./login.css";
import UserContext from "../../context/UserContext";
import axios from "axios";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";

function Login() {
  const context = useContext(UserContext);
  const { setUser } = context;
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: credentials.username,
        password: credentials.password,
      });
      const data = res.data;
      if (data.success) {
        setUser(data.user); // So that can get redirected itself without refreshing the page
        console.log(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("accessToken", data.accessToken);
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
    <div className="login">
      <span className="loginTitle">Login</span>
      <form onSubmit={handleSubmit} className="loginForm">
        <label htmlFor="username">Username</label>
        <input
          className="loginInput"
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username..."
          required
          onChange={onChange}
        />
        <label htmlFor="password">Password</label>
        <input
          className="loginInput"
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password..."
          required
          onChange={onChange}
        />
        <Button
          className="loginButton"
          type="submit"
          variant="contained"
          endIcon={<LoginIcon />}
        >
          Login
        </Button>
      </form>

      {error && (
        <span style={{ color: "red", textAlign: "center", marginTop: "15px" }}>
          Please login with correct credentials.
        </span>
      )}
    </div>
  );
}

export default Login;
