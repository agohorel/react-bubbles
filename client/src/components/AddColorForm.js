import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const AddColorForm = ({ updateColors }) => {
  const [formData, setFormData] = useState({ name: "", hex: "" });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const payload = {
      color: formData.name,
      code: {
        hex: formData.hex
      }
    };

    try {
      const res = await axiosWithAuth().post(`/colors`, payload);
      updateColors(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">color name</label>
      <input
        type="text"
        id="name"
        onChange={handleChange}
        value={formData.name}
      />
      <label htmlFor="hex">hex code</label>
      <input
        type="text"
        id="hex"
        onChange={handleChange}
        value={formData.hex}
      />
      <button>add color</button>
    </form>
  );
};
