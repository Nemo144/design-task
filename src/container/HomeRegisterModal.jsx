import React from "react";

import { Register } from "../components/Register";

export const HomeRegisterModal = () => {
  return (
    <div className="bg-[url('file:///Users/nnamdi/Documents/design-task/src/assets/home.png')] mr-52 blur-0 h-full w-full bg-cover bg-zinc-900">
      <div className=" pb-60 pl-52 mx-96 pt-52">
        <Register />
      </div>
    </div>
  );
};
