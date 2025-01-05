"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Menggunakan import sesuai permintaan

// Definisi tipe JwtPayload untuk mencocokkan struktur token JWT
interface JwtPayload {
  username: string;
  exp: number;
}

const DashboardPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [expire, setExpire] = useState<number>(0);
  const [users, setUsers] = useState<{ username: string }[]>([]);
  const router = useRouter();

  useEffect(() => {
    refreshToken();
    getUsers();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token', {
        withCredentials: true, // Menambahkan kredensial
      });
      setToken(response.data.accessToken);

      // Decode token dan gunakan tipe JwtPayload
      const decoded: JwtPayload = jwtDecode(response.data.accessToken);
      setUsername(decoded.username);
      setExpire(decoded.exp);
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        router.push("/");
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  const axiosJWT = axios.create({
    withCredentials: true, // Menambahkan kredensial untuk semua permintaan axiosJWT
  });

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get('http://localhost:5000/token', {
          withCredentials: true, // Menambahkan kredensial
        });
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);

        // Decode token dan gunakan tipe JwtPayload
        const decoded: JwtPayload = jwtDecode(response.data.accessToken);
        setUsername(decoded.username);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getUsers = async () => {
    try {
      const response = await axiosJWT.get('http://localhost:5000/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div>
      <h1 className="font-bold text-center">Maromi</h1>
      <p>Selamat datang, {username}</p>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;
