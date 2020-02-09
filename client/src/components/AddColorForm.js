import React, { useState } from "react";
import styled from "styled-components";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Form } from "../styles/form";

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
    <AddForm onSubmit={handleSubmit}>
      <legend>add color</legend>
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
    </AddForm>
  );
};

const AddForm = styled(Form)`
  width: calc(300px - 4rem);
  margin: 0 auto;
  position: absolute;
  bottom: 2rem;
  left: 2rem;

  legend {
    padding: 0;
  }

  input {
    width: 100%;
  }
`;
