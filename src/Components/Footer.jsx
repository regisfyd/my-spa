import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 px-6">
        <div>
          <h4 className="font-bold text-base mb-6">Yang Baru</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Microsoft Copilot</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Microsoft 365</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Microsoft 365 Family</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Microsoft 365 Personal</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Game PC</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">PC Game Pass</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Windows 11 apps</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-base mb-6">Microsoft Store</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Profil akun</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Pusat Unduh</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Pengembalian</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Pelacakan pesanan</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-base mb-6">Pendidikan</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Microsoft Education</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Perangkat untuk pendidikan</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Microsoft Teams untuk Pendidikan</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Microsoft 365 Education</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Office Education</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Pelatihan dan pengembangan pengajar</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Diskon untuk pelajar dan orang tua</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Azure untuk pelajar</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-base mb-6">Bisnis</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Microsoft Cloud</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Microsoft Security</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Azure</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Dynamics 365</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Microsoft 365</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Microsoft Advertising</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Microsoft 365 Copilot</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Microsoft Teams</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-base mb-6">Pengembang & TI</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Pusat Pengembang</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Dokumentasi</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Microsoft Learn</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Microsoft Tech Community</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Marketplace Azure</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">AppSource</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Microsoft Power Platform</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Visual Studio</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-base mb-6">Perusahaan</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Karier</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Tentang Microsoft</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Berita perusahaan</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Privasi di Microsoft</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Investor</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Keberlanjutan</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-12 pt-6 text-center text-xs text-gray-600">
        <p className="mb-2">Indonesia (Indonesia) | <a href="#" className="text-blue-600 hover:underline">Pilihan Privasi Anda</a> | Privasi Kesehatan Konsumen</p>
        <p>© Microsoft 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
