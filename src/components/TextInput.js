import React from "react";

const TextInput = ({ title, placeholder }) => {
  return (
    <div>
      <h1 className="font-poppins font-medium text-[11px]">{title}</h1>
      <input className="w-[186px] border-[#000000] text-black border-b-2 pl-1 text-[10px]" placeholder={placeholder} />
    </div>
  );
};

export default TextInput;
