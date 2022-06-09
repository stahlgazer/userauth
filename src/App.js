import React from "react";
import "./App.scss";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Login />
        <Logout />
        <Profile />
      </div>
    </div>
  );
}

export default App;
