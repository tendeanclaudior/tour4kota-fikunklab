import React from "react";

const Input = ({ title, placeholder, onChange, name, value, required, ...rest }) => {
  return (
    <div className="pt-[5px]">
      <span className="block font-poppins font-medium mb-1 text-black text-[8px]">{title}</span>
      <form className="flex flex-col">
        <input onChange={onChange} name={name} value={value} className="w-[140px] h-[20px] p-2 mr-4 rounded-[46px] border-[#EFF0F6] border-[1px] text-black text-[8px] shadow-sm" type="name" required={required}  placeholder={placeholder} {...rest} />
      </form>
    </div>
  );
};

export default Input;