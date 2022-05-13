import React from "react";
import { Login, Logo } from "./components/Login";

import { Home } from "./components/Home";
import { HomeRegisterModal } from "./container/HomeRegisterModal";
import { HomeLoginModal } from "./container/HomeLoginModal";

const App = () => {
  return (
    <div className=" flex flex-col justify-center p-10 items-center bg-zinc-900">
      <Logo />
      <Login />
      <Home />
      <div className="m-5">
        <HomeRegisterModal />
        <HomeLoginModal />
      </div>
    </div>
  );
};

export default App;
