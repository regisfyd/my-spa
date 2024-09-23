import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-14 bg-white flex justify-center">
        <div className="container flex justify-between">
          <div className="flex items-center gap-5 text-sm">
            <img src="logo.png" alt="logo" className="h-6" />
            <Link
              to="/Microsoft365"
              className="ml-4 hover:underline underline-offset-4"
            >
              Microsoft 365
            </Link>
            <Link to="/Teams" className="hover:underline underline-offset-4">
              Teams
            </Link>
            <Link to="/Copilot" className="hover:underline underline-offset-4">
              Copilot
            </Link>
            <Link to="/Xbox" className="hover:underline underline-offset-4">
              Xbox
            </Link>
            <Link
              to="/Dukungan"
              className="hover:underline underline-offset-4"
            >
              Dukungan
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/Search" className="hover:underline underline-offset-4">
              Cari
            </Link>
            <Link to="/Search" className="ml-2 mt-1 text-lg">
              <i className="bx bx-search"></i>
            </Link>

            <Link
              to="/Keranjang"
              className="ml-4 hover:underline underline-offset-4"
            >
              Keranjang
            </Link>
            <Link to="/Keranjang" className="mt-1 ml-1 text-lg">
              <i className="bx bx-cart"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
