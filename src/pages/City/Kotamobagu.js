import React from "react";
import Navbar from "../../components/Navbar";

const Kotamobagu = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="flex relative justify-center px-2 pt-40 sm:pt-40 text-black">
          <div className="bg-white rounded-xl shadow-2xl shadow-black-200 w-[1242px]">
            <div className="text-center">
              <h1 className="font-bold text-2xl my-6 uppercase">Kotamobagu</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex relative justify-center px-2 pt-20">
        <table className="bg-white rounded-xl shadow-2xl w-[1242px]">
          <thead className="text-black">
            <tr className="text-gray-100">
              <th className="py-3 bg-blue-500 text-2xl border-r-2 border-gray-300 rounded-tl-lg">No</th>
              <th className="py-3 bg-blue-500 text-2xl">Foto</th>
              <th className="py-3 bg-blue-500 text-2xl">Nama</th>
              <th className="py-3 bg-blue-500 text-2xl">No. WA</th>
              <th className="py-3 bg-blue-500 text-2xl">Medsos</th>
              <th className="py-3 bg-blue-500 text-2xl">Lokasi Event</th>
              <th className="py-3 bg-blue-500 text-2xl">Pembayaran</th>
            </tr>
          </thead>
          <tbody className="text-black text-center">
            <tr className="bg-white cursor-pointer border-b-2 border-gray-300">
              <td className="py-3 px-6 border-r-2">no</td>
              <td className="py-3 px-6">
                <img className="w-[50px] h-[50px] mx-auto rounded-full hover:scale-150" src={""} alt="/" />
              </td>
              <td className="py-3 px-6">nama</td>
              <td className="py-3 px-6">wa</td>
              <td className="py-3 px-6">medsos</td>
              <td className="py-3 px-6">kota</td>
              <td className="py-3 px-6">
                <button className="bg-green-400 hover:bg-green-200 px-2 py-2 mr-3 rounded-xl font-semibold uppercase">approv</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mb-[90px]"></div>
    </>
  );
};

export default Kotamobagu;