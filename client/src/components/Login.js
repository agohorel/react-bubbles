import React, { useState } from "react";
import axios from "axios";
import { Form } from "../styles/form";

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
      <Form onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          id="username"
          onChange={handleChange}
          value={formData.username}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          onChange={handleChange}
          value={formData.password}
        />
        <button>log in</button>
      </Form>
    </>
  );
};

export default Login;
