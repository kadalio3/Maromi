"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoginButton } from "../button";
import axios from "axios";
import Link from "next/link";

const LoginFormPage = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [msg, setMsg] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        // Periksa apakah pengguna sudah memiliki token login
        const response = await axios.get('http://localhost:5000/token', {
          withCredentials: true,
        });
        if (response.status === 200) {
          // Jika token valid, arahkan ke dashboard
          router.push("/dashboard");
        }
      } catch (error) {
        // Jika gagal, biarkan tetap di halaman login
        console.log("Belum login atau token tidak valid");
      }
    };
    checkLoginStatus();
  }, [router]);

  const Auth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(
        'http://localhost:5000/login',
        {
          username: username,
          password: password,
        },
        {
          withCredentials: true, // Menambahkan kredensial
        }
      );
      router.push("/dashboard");
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        setMsg(error.response.data.msg);
      } else {
        setMsg("Terjadi kesalahan, silakan coba lagi.");
      }
    }
  };

  return (
    <form onSubmit={Auth} className="space-y-6">
      <p className="has-text-centered">{msg}</p>
      <div>
        <div className="relative">
          <input
            autoComplete="off"
            id="username"
            name="username"
            type="text"
            className="peer placeholder-transparent h-10 w-full border-2 border-gray-300 text-gray-900 focus:outline-none focus:border-gray-500 p-2.5"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label
            htmlFor="username"
            className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Username
          </label>
        </div>
      </div>
      <div className="relative">
        <input
          autoComplete="off"
          id="password"
          name="password"
          type="password"
          className="peer placeholder-transparent h-10 w-full border-2 border-gray-300 text-gray-900 focus:outline-none focus:border-gray-500 p-2.5"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label
          htmlFor="password"
          className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Password
        </label>
      </div>
      <LoginButton />
      <p className="text-sm font-light text-gray-500">
        Don't have an account?
        <Link href="/register">
          <span className="font-medium pl-1 text-blue-600 hover:text-blue-700">
            Sign Up Here
          </span>
        </Link>
      </p>
    </form>
  );
};

export default LoginFormPage;
