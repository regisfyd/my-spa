function Body() {
  return (
    <>
      <div className="bg-[url('https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Slim-Multi-Canvas-M365-Anthem-Attract-Image-Create:VP5-1920x600')] w-full h-[550px] bg-cover flex items-center ">
        <div className="flex flex-col justify-center items-center w-[43%] h-full">
          <div className="">
            <p className="text-4xl font-semibold items-center">
              Maksimalkan keseharian <br /> dengan Microsoft 365
            </p>
            <p className="mt-5 text-lg">
              Dapatkan perlindungan online, penyimpanan cloud yang aman, dan
              aplikasi <br /> inovatif yang dirancang sesuai dengan kebutuhan
              Anda dalam satu paket.
            </p>
            <div className="flex items-center">
              <button className="flex items-center justify-center border w-32 h-11 rounded-md border-blue-700 bg-blue-700 text-white font-medium mt-5 hover:bg-slate-50 hover:text-blue-700 border-none transition ease-in-out duration-300">
                <a href="/Contoh" className="">
                  Untuk 1 orang
                </a>
              </button>
              <a
                href="/Contoh"
                className="ml-7 mt-4 font-medium hover:underline underline-offset-4"
              >
                Untuk hingga 6 orang
              </a>
              <a href="/Contoh" className="text-2xl text-center mt-5">
                <i class="bx bx-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-8 flex justify-center">
        <div className="container flex justify-center">
          <div className="flex items-center gap-16 mt-20">
            <div className="flex flex-col">
              <a href="/Contoh" className="text-4xl ml-16 hover:text-red-500">
                <i class="bx bxl-microsoft"></i>
              </a>
              <a href="/Contoh" className="hover:text-blue-700 hover:underline">
                Pilih Microsoft 365 Anda
              </a>
            </div>

            <div className="flex flex-col">
              <a href="/Contoh" className="text-4xl ml-24 hover:text-yellow-500">
                <i class="bx bxs-game"></i>
              </a>
              <a href="/Contoh" className="hover:text-blue-700 hover:underline">
                Beli Game PC dan PC Game Pass
              </a>
            </div>

            <div className="flex flex-col">
              <a href="/Contoh" className="text-4xl ml-16 hover:text-blue-600">
                <i class="bx bxl-microsoft"></i>
              </a>
              <a href="/Contoh" className="hover:text-blue-700 hover:underline">
                Dapatkan Windows 11
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-6 p-24">
        <div className="container flex justify-center">
          <div className="flex relative">
            <img src="bg-microsoft-1.avif" className="rounded-md" alt="" />
            <div className="flex justify-center items-center w-5/12 h-full absolute">
              <div className="bg-white h-64 w-9/12 flex justify-center items-center flex-col gap-4 rounded-md">
                <h1 className="text-4xl font-semibold">Microsoft Edge</h1>
                <p className="ml-16">
                  Performa kelas dunia dengan lebih banyak privasi,
                  produktivitas, dan nilai saat Anda menjelajah
                </p>
                <button className="bg-blue-700 text-white w-36 h-12 rounded-md font-medium hover:transition ease-in-out duration-300 hover:bg-blue-800">Unduh Sekarang</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
