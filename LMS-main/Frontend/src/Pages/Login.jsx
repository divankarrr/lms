import React from "react";
import Lottie from "lottie-react";
import study from "../LottieJson/Study.json";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="bg-[#020617] flex items-center justify-center min-h-screen px-4 py-10 mt-7">

      <div className="w-full max-w-7xl bg-gradient-to-r from-[#020617] via-[#0f172a] to-[#020617] rounded-2xl p-6 md:p-10 border border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* RIGHT SECTION (ANIMATION) */}
        <div className="relative flex justify-center items-center order-1 md:order-2">

          {/* Glow Background */}
          <div className="absolute w-72 h-72 bg-purple-500 blur-3xl opacity-20 rounded-full"></div>

          {/* Lottie Animation */}
          <Lottie.default
          animationData={study}
          loop={true}
          className="w-[280px] md:w-[420px] z-10"
/>

        </div>

        {/* LOGIN CARD */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 w-full max-w-md mx-auto order-2 md:order-1 shadow-xl">

          <p className="text-orange-400 font-semibold mb-2">Your logo</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Login
          </h2>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              placeholder="username@gmail.com"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-[#020617] border border-gray-700 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="text-sm text-gray-400">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-[#020617] border border-gray-700 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <p className="text-xs text-gray-400 mb-4 cursor-pointer hover:text-orange-400">
            Forgot Password?
          </p>

          {/* Button */}
          <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
            Sign in
          </button>

          {/* Divider */}
          <p className="text-center text-gray-400 text-sm my-4">
            or continue with
          </p>

          {/* Social */}
          <div className="flex justify-center gap-4">
            <button className="bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20">
              G
            </button>
            <button className="bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20">
              🐙
            </button>
            <button className="bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20">
              f
            </button>
          </div>

          {/* Register */}
          <p className="text-center text-sm text-gray-400 mt-6">
            Don’t have an account yet?{" "}
            <Link to="/register" className="text-orange-400 font-semibold cursor-pointer hover:underline">
              Register for free
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;