import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Register = () => {
  // const [toggle, setToggle] = useState(false);

  return (
    <div className="flex flex-wrap rounded mx-auto  mb-10 pb-10 w-96 bg-zinc-800">
      <div className="sm:mx-auto sm:w-full sm:max-w-md w-full pb-3 mt-5">
        <div>
          <AiOutlineCloseCircle
            size={27}
            // onClick={() => setToggle(true)}
            className="mx-80 cursor-pointer mr-2"
          />
        </div>
        <h1 className=" text-sm font-light text-center text-gray-600  ">
          Sign up
        </h1>
        <div className="flex flex-wrap justify-center items-center text-white">
          <h2>Create an account to continue</h2>
        </div>
      </div>

      <div className="mt-2 pt-3 w-full text-sm font-light text-center p-5">
        <form>
          <label
            className="flex flex-wrap justify-start text-gray-300"
            for="Email or Username"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            label="Email or Username"
            placeholder="Enter your email"
            className="w-full pl-1 border border-gray-800 h-10 bg-zinc-700 rounded "
          />
        </form>
      </div>

      <div className="mt-2 pt-3 w-full text-sm font-light text-center p-5">
        <form>
          <label
            className="flex flex-wrap justify-start text-gray-300"
            for="Email or Username"
          >
            Username
          </label>
          <input
            id="username"
            type="username"
            label="Username"
            placeholder="Choose your preferred username"
            className="w-full pl-1 border border-gray-800 h-10 bg-zinc-700 rounded "
          />
        </form>
      </div>

      <div className=" w-full pt-3 text-sm font-light text-center mb-5 p-5">
        <form>
          <div className="flex justify-between">
            <label
              for="Password"
              className="flex flex-wrap justify-start text-gray-300"
            >
              Password
            </label>
            <h3 className="text-gray-300">Forgot password?</h3>
          </div>
          <div className="relative flex w-full justify-between">
            <input
              type="password"
              placeholder="Choose a strong password"
              label="Password"
              className="w-full pl-1 border-gray-600 h-10 border bg-zinc-700 rounded  "
            />
            <div className="absolute mx-80 my-3 cursor-pointer">
              <AiOutlineEye />
            </div>
          </div>
        </form>
      </div>

      <div className="w-full border rounded mx-5 h-10 border-blue-400 flex items-center justify-center bg-blue-400 text-white cursor-pointer">
        <button>Login Now</button>
      </div>

      <div className="mx-5 mb-5 text-gray-500">
        <h4 className="flex justify-items-start">
          Already have an account?
          <a href="/#" className="text-gray-300 ml-1">
            {" "}
            Login →
          </a>
        </h4>
      </div>
    </div>
  );
};
