import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Halaman Tidak Ditemukan</h2>
      <p className="text-gray-600 mb-6">
      Oops! Halaman yang Anda cari tidak ada.</p>
      <Link to="/" className="text-white border-2 border-black bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md">
        Balik
      </Link>
    </div>
  );
};

export default Notfound;
