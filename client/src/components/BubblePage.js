import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = ({ history }) => {
  const [colorList, setColorList] = useState([]);

  const logOut = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  useEffect(() => {
    async function fetch() {
      try {
        const res = await axiosWithAuth().get("/colors");
        setColorList(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetch();
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
      <LogOut onClick={logOut}>Log Out</LogOut>
    </>
  );
};

export default BubblePage;

const LogOut = styled.p`
  position: absolute;
  right: 2rem;
  top: 2rem;
  color: #eee;

  :hover {
    cursor: pointer;
    color: #aaa;
  }
`;
