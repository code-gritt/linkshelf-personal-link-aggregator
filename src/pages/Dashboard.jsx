import React, { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useApiStore } from "../store/useApiStore";
import Loader from "../components/Loader";

const Dashboard = () => {
  const { user, clearAuth } = useAuthStore();
  const { isLoading } = useApiStore();

  // Redirect to login if user is not authenticated
  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  }, [user]);

  const handleLogout = () => {
    clearAuth();
    window.location.href = "/login";
  };

  if (!user) return <Loader isLoading={true} />; // Show loader while redirecting

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-100">
      <Loader isLoading={isLoading} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-md border border-gray-200">
          Null
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
