import React from "react";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";

const App = () => {
  return (
    <div className="bg-black w-full h-full">
      <div>
        <Login />
        {/* <Signup /> */}
      </div>
    </div>
  );
};

export default App;
