import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";

const Scan = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("-");
  return (
    <div className="flex items-center flex-col pt-[130px]">
      <h1 className="font-poppins font-semibold text-[14px] text-[#A61E22] mb-[20px]">SCAN HERE</h1>
      <div className="w-[244px] h-[230px] bg-[#E9E9E9] rounded-3xl flex items-center justify-center flex-col">
        <QrReader
          className="w-full"
          constraints={{ facingMode: "environment" }}
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
              if (result?.text === "PT KTP FIK UNKLAB TOUR4KOTA BAND JARANKPULANG") {
                navigate("/lastpage");
              }
            }

            if (!!error) {
              console.info(error);
            }
          }}
          style={{ width: "100%" }}
        />
      </div>
      <p className="font-poppins font-medium text-[10px] mt-4">{data}</p>
    </div>
  );
};

export default Scan;
