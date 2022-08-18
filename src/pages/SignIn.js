import React from "react";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

const SignIn = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-gradient-to-b from-[#1B8D42] via-[#FF0000] to-[#FFDD00] p-[1px] mt-[129px] absolute rounded-lg shadow-2xl">
        <div className="flex w-[244px] h-[382px] bg-white border items-center flex-col rounded-lg relative">
          <h1 className="text-[14px] text-[#A61E22] mt-[20px] font-poppins font-semibold">Hi, Welcome Back! 👋</h1>
          <div className="h-[60px]"></div>
          <TextInput title="Email" placeholder="Enter your email" />
          <div className="h-[15px]"></div>
          <TextInput title="Password" placeholder="Enter your password" />
          <div className="mt-[50px]">
            <Button title="Sign in" />
          </div>
          <div className="inline-flex mt-[15px]">
            <h2 className="text-[10px] font-poppins font-medium">Don't have an account?</h2>
            <h2 className="text-[10px] font-poppins font-medium text-[#FF0000] underline">Sign up</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
