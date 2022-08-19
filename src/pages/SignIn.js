import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignIn = () => {
  const { logIn } = UserAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/regis");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="bg-gradient-to-b from-[#1B8D42] via-[#FF0000] to-[#FFDD00] p-[1px] mt-[129px] absolute rounded-lg shadow-2xl">
        <div className="flex w-[244px] h-[382px] bg-white border items-center flex-col rounded-lg relative">
          <h1 className="text-[14px] text-[#A61E22] mt-[20px] font-poppins font-semibold">Hi, Welcome Back! 👋</h1>
          <div className="h-[60px]"></div>
          <form onSubmit={handleSubmit}>
            <h1 className="font-poppins font-medium text-[11px]">Email</h1>
            <input onChange={(e) => setEmail(e.target.value)} className="w-[186px] border-[#000000] text-black border-b-2 pl-1 text-[10px]" placeholder="Tulis email anda" />
            <div className="h-[15px]"></div>
            <h1 className="font-poppins font-medium text-[11px]">Password</h1>
            <input onChange={(e) => setPassword(e.target.value)} type="password" className="w-[186px] border-[#000000] text-black border-b-2 pl-1 text-[10px]" placeholder="Tulis password anda" />
            <div className="h-[50px]"></div>
            <div className="w-full flex justify-center">
              <button className="h-[24px] w-[80px] px-[10px] bg-[#4B4C51] rounded-[7px] flex justify-center items-center cursor-pointer text-[13px] font-poppins font-medium text-white">Sign In</button>
            </div>
          </form>
          <div className="inline-flex mt-[15px]">
            <h2 className="text-[10px] font-poppins font-medium">Don't have an account?</h2>
            <Link to="/signup">
              <h2 className="text-[10px] font-poppins font-medium text-[#FF0000] underline cursor-pointer">Sign up</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
