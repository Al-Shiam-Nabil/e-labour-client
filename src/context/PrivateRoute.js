"use client";
import useAuthHook from "@/Hook/useAuthHook";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuthHook();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="w-full  py-20 grid place-items-center bg-transparent">
        <span className="loading loading-spinner loading-xl text-primary"></span>
      </div>
    );
  }

  if (!user) return null;

  return children;
}
