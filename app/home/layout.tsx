// app/home/layout.tsx
"use client";
import HomeNavbar from "@/components/home/navbar";
import { useEffect, useState } from "react";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  if (theme === null) {
    // Render hanya saat tema telah diatur
    return null;
  }

  return (
    <html lang="en" className={`${theme}`}>
      <body className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
        <div className="border-b border-gray-300 dark:border-gray-700">
          <HomeNavbar />
        </div>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
