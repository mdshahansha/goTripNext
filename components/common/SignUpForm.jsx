"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const fullName = `${firstName} ${lastName}`;

    try {
      const response = await fetch("https://amadeus-backend.onrender.com/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: fullName, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        router.push("/");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Registration failed.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <form className="row y-gap-20" onSubmit={handleSubmit}>
      <div className="col-12">
        <h1 className="text-22 fw-500">Welcome</h1>
        <p className="mt-10">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-1">
            Log in
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
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label className="lh-1 text-14 text-light-1">First Name</label>
        </div>
      </div>

      <div className="col-12">
        <div className="form-input">
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label className="lh-1 text-14 text-light-1">Last Name</label>
        </div>
      </div>

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
        <div className="form-input">
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <label className="lh-1 text-14 text-light-1">Confirm Password</label>
        </div>
      </div>

      <div className="col-12">
        <div className="d-flex">
          <div className="form-checkbox mt-5">
            <input type="checkbox" name="promotions" />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
          </div>
          <div className="text-15 lh-15 text-light-1 ml-10">
            Email me exclusive promotions. I can opt out later as stated in the Privacy Policy.
          </div>
        </div>
      </div>

      <div className="col-12">
        <button
          type="submit"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          Sign Up <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
