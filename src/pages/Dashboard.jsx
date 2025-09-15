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
          {/* User Info */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {initials}
            </div>
            <div>
              <h2 className="text-xl font-bold text-blue-500">
                Welcome, {user.name}
              </h2>
              <p className="text-gray-500">{user.email}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-100"
              onClick={() => window.location.reload()}
            >
              Dashboard
            </button>
            <button
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-red-500 transition-all hover:shadow-lg hover:shadow-red-100"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
