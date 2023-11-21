import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import g3 from "../assets/Group 3.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("hello@example.com"); // Hardcoded email
  const [password, setPassword] = useState("byepassword"); // Hardcoded password
  const [notification, setNotification] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., validate email and password)
    var isLoginSuccessful = false
     if (email === "hello@example.com" && password === "byepassword"){
        isLoginSuccessful = true
     }
    if (isLoginSuccessful) {
      // Redirect to the dashboard page
      navigate("/home");
    } else {
      // Set notification for unsuccessful login
      setNotification("Wrong password. Please try again.");
    }
  };

  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center">
      <img
        src={g3}
        alt=""
        className="absolute top-160 left-134 w-90 h-90 object-cover mt-[-400px]"
        style={{ zIndex: 1 }}
      />
      <div className="text-center justify-center">
        <p className=" text-[#36A546CC] pt-40 mt-[-200px] text-base font-['Mulish']">
          We are Electric
        </p>
      </div>
      <form>
        <div className="mt-4">
          {/* Email input */}
          <input
            type="email"
            placeholder={!email ? "Email" : ""}
            value={email}
            onChange={handleEmailChange}
            className="w-56 h-10 px-2 rounded-full bg-[#1F191966] placeholder-[#FFFDFD40]::placeholder text-white focus:outline-none focus:border-[#4A494947] focus:ring focus:border-[#4A494947]"
          />
        </div>

        <div className="mt-2">
          {/* Password input */}
          <input
            type="password"
            placeholder={!password ? "Password" : ""}
            value={password}
            onChange={handlePasswordChange}
            className="w-56 h-10 px-2 rounded-full bg-[#1F191966] mt-4 placeholder-[#FFFDFD40]::placeholder text-white focus:outline-none focus:border-[#4A494947] focus:ring focus:border-[#4A494947]"
          />
        </div>
        <div className="mt-4">
          {/* Login button */}
          <button
            className="w-56 hover:bg-green-950 rounded-full h-10 bg-gradient-to-r from-[#00FF2580] to-[#36A54680] text-white border-2 border-[#8CFF0026] mix-blend-normal"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>

      {notification && <p className="text-red-500 mt-2">{notification}</p>}

      <p className="text-[#36A546] mt-4 text-sm">Forgot Password?</p>
    </div>
  );
};

export default Login;
