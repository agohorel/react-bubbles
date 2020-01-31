import React, { useState } from "react";
import styled from "styled-components";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import { AddColorForm } from "./AddColorForm";
import { Form } from "../styles/form";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = async (e, id) => {
    e.preventDefault();
    try {
      const res = await axiosWithAuth().put(`colors/${id}`, colorToEdit);
      const updatedColors = colors.filter(color => color.id !== id);
      updatedColors.push(res.data);
      updateColors(updatedColors);
      setEditing(false);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteColor = async color => {
    try {
      const res = await axiosWithAuth().delete(`colors/${color.id}`);
      const updatedColors = colors.filter(color => color.id !== res.data);
      updateColors(updatedColors);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span
                className="delete"
                onClick={e => {
                  e.stopPropagation();
                  deleteColor(color);
                }}
              >
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <EditForm onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label htmlFor="name">color name:</label>
          <input
            id="name"
            onChange={e =>
              setColorToEdit({ ...colorToEdit, color: e.target.value })
            }
            value={colorToEdit.color}
          />
          <label htmlFor="hex">hex code:</label>
          <input
            id="hex"
            onChange={e =>
              setColorToEdit({
                ...colorToEdit,
                code: { hex: e.target.value }
              })
            }
            value={colorToEdit.code.hex}
          />
          <div className="button-row">
            <button type="submit" onClick={e => saveEdit(e, colorToEdit.id)}>
              save
            </button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </EditForm>
      )}
      {!editing && <AddColorForm updateColors={updateColors}></AddColorForm>}
    </div>
  );
};

export default ColorList;

const EditForm = styled(Form)`
  width: 100%;
  margin: 2rem 0;

  legend {
    padding: 0;
  }

  input {
    width: 100%;
  }
`;
