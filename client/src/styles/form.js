import styled from "styled-components";

export const Form = styled.form`
  margin: 10rem auto;
  width: 34%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2c2c2c;
  padding: 2rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 3px;

  label {
    color: #efefef;
  }

  input {
    border: none;
    width: 67%;
    background-color: #9c9c9c;
    color: #1c1c1c;
    padding: 0.25rem;
    font-family: "Roboto", sans-serif;
    margin-bottom: 2rem;
  }

  button {
    border: none;
    background-color: #3c3c3c;
    padding: 0.5rem;
    color: #fff;
    transition: 0.2s ease-out all;
    border-radius: inherit;
    font-size: 16px;

    :hover {
      cursor: pointer;
      background-color: #2c2c2c;
      color: #eee;
    }
  }

  * {
    margin: 0.25rem;
  }
`;
