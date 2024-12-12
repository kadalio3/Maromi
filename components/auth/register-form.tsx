import React from "react";
import { LoginButton, RegisterButton } from "../button";
import Link from "next/link";

const RegisterFormPage = () => {
  return (
    <form className="space-y-6">
      {/* Username Input */}
      <div>
        <div className="relative">
          <input
            autoComplete="off"
            id="username"
            name="username"
            type="text"
            className="peer placeholder-transparent h-10 w-full border-2 border-gray-300 text-gray-900 focus:outline-none focus:border-gray-500 p-2.5"
            placeholder="Username"
          />
          <label
            htmlFor="username"
            className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Username
          </label>
        </div>
      </div>

      {/* Email Input */}
      <div>
        <div className="relative">
          <input
            autoComplete="off"
            id="email"
            name="email"
            type="email"
            className="peer placeholder-transparent h-10 w-full border-2 border-gray-300 text-gray-900 focus:outline-none focus:border-gray-500 p-2.5"
            placeholder="Email"
          />
          <label
            htmlFor="email"
            className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Email
          </label>
        </div>
      </div>

      {/* Password Input */}
      <div className="relative">
        <input
          autoComplete="off"
          id="password"
          name="password"
          type="password"
          className="peer placeholder-transparent h-10 w-full border-2 border-gray-300 text-gray-900 focus:outline-none focus:border-gray-500 p-2.5"
          placeholder="Password"
        />
        <label
          htmlFor="password"
          className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Password
        </label>
      </div>

      {/* Confirm Password Input */}
      <div className="relative">
        <input
          autoComplete="off"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          className="peer placeholder-transparent h-10 w-full border-2 border-gray-300 text-gray-900 focus:outline-none focus:border-gray-500 p-2.5"
          placeholder="Confirm Password"
        />
        <label
          htmlFor="confirmPassword"
          className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Confirm Password
        </label>
      </div>

      {/* Register Button */}
      <RegisterButton />

      {/* Redirect to Login */}
      <p className="text-sm font-light text-gray-500">
        Already have an account?
        <Link href="/login">
          <span className="font-medium pl-1 text-blue-600 hover:text-blue-700">
            Login Here
          </span>
        </Link>
      </p>
    </form>
  );
};

export default RegisterFormPage;
