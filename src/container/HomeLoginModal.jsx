import React from "react";
import { Login } from "../components/Login";

export const HomeLoginModal = () => {
  return (
    <div className="bg-[url('file:///Users/nnamdi/Documents/design-task/src/assets/home.png')] mr-52 blur-0 h-full w-full bg-cover bg-zinc-900">
      <div className=" pb-60 mx-96 pt-52">
        <Login />
      </div>
    </div>
  );
};
