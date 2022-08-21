import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-screen h-[88px] z-10 bg-white fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center group">
          <h3 className="text-3xl mr-10 text-blue-500 font-poppins font-semibold">Tour 4 Kota</h3>
          <ul className="flex">
            <Link to="/admin">
              <li className="text-blue-500 font-semibold mr-3">Beranda</li>
            </Link>
            <Link to="/manado">
              <li className="text-blue-500 font-semibold mr-3">Manado</li>
            </Link>
            <Link to="/bitung">
              <li className="text-blue-500 font-semibold mr-3">Bitung</li>
            </Link>
            <Link to="/kotamobagu">
              <li className="text-blue-500 font-semibold mr-3">Kotamobagu</li>
            </Link>
            <Link to="/gorontalo">
              <li className="text-blue-500 font-semibold mr-3">Gorontalo</li>
            </Link>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl text-white">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
