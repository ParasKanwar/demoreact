import React from "react";
import "./App.css";
import Login from "./Pages/Login/index";
import Home from "./Pages/Home/home";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/home" component={Home}></Route>
    </BrowserRouter>
  );
}

export default App;
