import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignIn from "../../hooks/useSignIn";

const SignIn = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  // custom hook;
  const { loading, signIn } = useSignIn();

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    await signIn(input);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={formSubmitHandler}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={input.username}
              onChange={(e) => setInput({ ...input, username: e.target.value })}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button
              type="submit"
              className={`btn btn-block btn-sm mt-2`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span>Loading</span>
                  <span className="loading loading-spinner"></span>
                </>
              ) : (
                "login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
