import React, { useState } from "react";
import axios from "axios";

const Login = ({ history }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", formData);
      localStorage.setItem("token", res.data.payload);
      history.push("/bubbles");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          id="username"
          onChange={handleChange}
          value={formData.username}
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          onChange={handleChange}
          value={formData.password}
        />
        <button>log in</button>
      </form>
    </>
  );
};

export default Login;
