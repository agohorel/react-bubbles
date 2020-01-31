import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import GlobalStyle from "./styles/global";
import "./styles.scss";

function App() {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/bubbles" component={BubblePage}></PrivateRoute>
      </div>
    </Router>
  );
}

export default App;
