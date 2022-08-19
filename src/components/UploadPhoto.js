import React from "react";

const UploadPhoto = ({...rest}) => {
  return (
    <div className="px-5">
      <input
        type="file"
        {...rest}
        className="w-full text-xs text-slate-500
            file:ml-6 file:border file:border-[#EFF0F6] file:text-sm file:bg-[#EFF0F6]
          file:text-gray-500 hover:file:bg-white"
      />
    </div>
  );
};

export default UploadPhoto;
