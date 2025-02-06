"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    try {
      const response = await fetch("https://amadeus-backend.onrender.com/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      console.log("__login",response.data)
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token); // Store token in localStorage
        router.push("/"); // Redirect to dashboard or another page
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <form className="row y-gap-20" onSubmit={handleSubmit}>
      <div className="col-12">
        <h1 className="text-22 fw-500">Welcome back</h1>
        <p className="mt-10">
          Don&apos;t have an account yet?{" "}
          <Link href="/signup" className="text-blue-1">
            Sign up for free
          </Link>
        </p>
      </div>

      {error && (
        <div className="col-12">
          <p className="text-red-1">{error}</p>
        </div>
      )}

      <div className="col-12">
        <div className="form-input">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="lh-1 text-14 text-light-1">Email</label>
        </div>
      </div>

      <div className="col-12">
        <div className="form-input">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className="lh-1 text-14 text-light-1">Password</label>
        </div>
      </div>

      <div className="col-12">
        <a href="#" className="text-14 fw-500 text-blue-1 underline">
          Forgot your password?
        </a>
      </div>

      <div className="col-12">
        <button
          type="submit"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          Sign In <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
