import React from "react";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

const SignUp = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-gradient-to-b from-[#1B8D42] via-[#FF0000] to-[#FFDD00] p-[1px] mt-[129px] absolute rounded-lg shadow-2xl">
        <div className="flex w-[244px] h-[382px] bg-white border items-center flex-col rounded-lg relative">
          <h1 className="text-[14px] text-[#A61E22] mt-[20px] font-poppins font-semibold">Create an Account</h1>
          <div className="h-[60px]"></div>
          <TextInput title="Email" placeholder="Enter your email" />
          <div className="h-[15px]"></div>
          <TextInput title="Password" placeholder="Enter your password" />
          <div className="h-[50px]"></div>
          <Button title="Sign Up" />
          <div className="inline-flex mt-[15px]">
            <h2 className="text-[10px] font-poppins font-medium">Already have an account?</h2>
            <h2 className="text-[10px] font-poppins font-medium text-[#FF0000] underline">Sign In</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
