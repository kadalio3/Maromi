"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const [loading, setLoading] = useState(true); // State untuk loading
  const router = useRouter();

  useEffect(() => {
    // Simulasi loading sebelum redirect ke /home
    const timer = setTimeout(() => {
      setLoading(false); // Matikan loading
      router.push("/home"); // Redirect ke /home
    }, 3000); // Durasi loading 3 detik

    return () => clearTimeout(timer); // Bersihkan timer saat komponen di-unmount
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      {loading ? (
        // Animasi loading
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
      ) : null}
    </div>
  );
}
