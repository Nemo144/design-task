import React from "react";
import { Login } from "../components/Login";
import { Home } from "../components/Home";
import { Register } from "../components/Register";
import { images } from "../constants";
import "./HomeRegisterModal.css";

export const HomeRegisterModal = () => {
  return (
    <div className="bckg">
      <div>
        {/* <Register /> */}
        {/* <Home /> */}
        <Login />
      </div>
    </div>
  );
};
