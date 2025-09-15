import React, { useState } from "react";
import { useApiStore } from "../store/useApiStore";
import { useAuthStore } from "../store/useAuthStore";
import Loader from "../components/Loader";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const { graphqlRequest, isLoading, error } = useApiStore();
  const { setAuth } = useAuthStore();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const data = await graphqlRequest(
        `
        mutation Register($input: RegisterInput!) {
          register(input: $input) {
            token
            user { id name email }
          }
        }
      `,
        {
          input: {
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
          },
        }
      );

      setAuth(data.register.user, data.register.token);
      window.location.href = "/dashboard";
    } catch (err) {
      // error handled in store
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Loader isLoading={isLoading} />
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md border border-gray-200"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-500">
          Sign Up
        </h2>
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
          required
        />
        <input
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          placeholder="Confirm Password"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
          required
        />
        <button
          type="submit"
          className="w-full bg-amber-500 text-white p-3 rounded-lg hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-100"
        >
          Register
        </button>
        <p className="mt-4 text-center text-gray-500 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Log In
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
