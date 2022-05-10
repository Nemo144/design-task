import React from "react";
import { AiOutlineEye } from "react-icons/ai";

export const Login = () => {
  return (
    <div className="flex flex-wrap justify-center items-center border-zinc-800 rounded mx-auto w-96 bg-zinc-800">
      <div className="sm:mx-auto sm:w-full sm:max-w-md w-full mt-5">
        <h1 className=" text-sm font-light text-center text-gray-600  ">
          WELCOME BACK
        </h1>
        <div className="flex flex-wrap justify-center items-center text-white">
          <h2>Log into your account</h2>
        </div>
      </div>

      <div className="mt-2 w-full text-sm font-light text-center p-5">
        <form>
          <label
            className="flex flex-wrap justify-start text-gray-400"
            for="E-mail or Username"
          >
            E-mail or Username
          </label>
          <input
            id="email"
            type="email"
            label="E-mail or Username"
            placeholder="Enter your email or username"
            className="w-full border border-gray-800 h-11 bg-zinc-700 rounded "
          />
        </form>
      </div>

      <div className=" w-full text-sm font-light text-center mb-5 p-5">
        <form>
          <div className="flex justify-between">
            <label
              for="Password"
              className="flex flex-wrap justify-start text-gray-400"
            >
              Password
            </label>
            <h3>Forgot password?</h3>
          </div>
          <div className="flex justify-between">
            <input
              type="password"
              placeholder="Enter your password"
              label="Password"
              className="w-full border-gray-600 h-11 border bg-zinc-700 rounded justify-between "
              img={<AiOutlineEye />}
            />
          </div>
        </form>
      </div>

      <div>
        <button>Login Now</button>
      </div>

      <div>
        <h4>Not registered yet?Register →</h4>
      </div>
    </div>
  );
};
