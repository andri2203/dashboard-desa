import { ComponentPropsWithRef, forwardRef, useContext } from "react";
import { TfiAlignJustify, TfiLock } from "react-icons/tfi";
import { BiSolidUser, BiLogOut } from "react-icons/bi";
import Footer from "../Footer";
import { Outlet, Link } from "react-router-dom";
import AppContext from "../Context/AppContext";

interface ContentType extends ComponentPropsWithRef<"aside"> {}

const Content = forwardRef<HTMLDivElement, ContentType>(() => {
  const { visibleSide, handleVisibleSide, locationPathName } =
    useContext(AppContext);

  const formatPathname = (pathname: string) => {
    return pathname
      .split("/") // Split the pathname by '/'
      .filter(Boolean) // Remove empty strings
      .map(
        (
          part // Capitalize and replace hyphens
        ) =>
          part
            .split("-") // Split part by hyphens
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
            .join(" ") // Join words with a space
      )
      .join(" > ");
  };

  return (
    <section
      className={`flex flex-col min-h-screen ${
        visibleSide ? "lg:w-body lg:ml-sidebar" : "w-screen"
      } transition-all duration-300`}
    >
      <nav
        className={`fixed top-0 left-0 right-0  flex justify-between items-center h-12 px-3 bg-gray-100 shadow-sm ${
          visibleSide ? "lg:ml-sidebar" : "ml-0"
        } transition-all duration-300`}
      >
        <button
          className="flex items-center outline-0 text-gray-800 hover:text-black transition-all"
          onClick={handleVisibleSide}
        >
          <TfiAlignJustify />
          <span
            className={`ml-3 text-xl text-sky-600 font-black uppercase tracking-wider ${
              visibleSide ? "lg:opacity-0" : "lg:opacity-1"
            } transition-all duration-100`}
          >
            Dashboard Desa
          </span>
        </button>
        <ul className="flex justify-end items-center gap-2 text-lg">
          <li className="group relative">
            <button className="outline-0 flex justify-center items-center hover:text-black hover:bg-gray-300 bg-gray-200 size-7 rounded-full">
              <BiSolidUser />
            </button>
            <ul
              role="list"
              className="absolute hidden top-7 z-10 -right-2 group-hover:flex flex-col w-44 bg-white text-sm rounded-md shadow"
            >
              <li className="">
                <Link
                  to="/"
                  className="flex justify-between items-center hover:text-black hover:bg-gray-100 px-4 py-3 gap-5 transition-all"
                >
                  <BiSolidUser /> Akun Saya
                </Link>
              </li>
              <li className="">
                <Link
                  to="/"
                  className="flex justify-between items-center hover:text-black hover:bg-gray-100 px-4 py-3 gap-5 transition-all"
                >
                  <TfiLock /> Ubah Password
                </Link>
              </li>
              <li className="">
                <button className="outline-0 flex justify-between items-center w-full hover:text-black hover:bg-gray-100 px-4 py-3 gap-5 transition-all">
                  <BiLogOut /> Keluar
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <section className="p-3 mt-12 text-xs">
        {locationPathName == "/"
          ? "Beranda"
          : "Beranda > " + formatPathname(locationPathName)}
      </section>
      <Outlet />

      <Footer />
    </section>
  );
});

export default Content;
