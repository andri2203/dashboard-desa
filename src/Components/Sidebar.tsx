import { ComponentPropsWithRef, forwardRef, useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HiHome,
  HiChevronRight,
  HiOutlineChevronDoubleRight,
  HiNewspaper,
  HiUserGroup,
} from "react-icons/hi";
import AppContext from "../Context/AppContext";

interface SidebarType extends ComponentPropsWithRef<"aside"> {}

type MenuItem = {
  name: string;
  icon: any;
  to: string;
  menuHide?: boolean;
  childs?: MenuItem[];
};

const Sidebar = forwardRef<HTMLDivElement, SidebarType>(() => {
  const { visibleSide } = useContext(AppContext);
  const location = useLocation();

  let menuList: MenuItem[] = [
    { name: "Beranda", icon: HiHome, to: "/" },
    {
      name: "Kependudukan",
      icon: HiUserGroup,
      to: "/kependudukan",
      menuHide: true,
      childs: [
        {
          name: "Tambah Data Penduduk",
          icon: HiOutlineChevronDoubleRight,
          to: "/tambah-data-penduduk",
        },
        {
          name: "Data Penduduk",
          icon: HiOutlineChevronDoubleRight,
          to: "/data-penduduk",
        },
      ],
    },
    {
      name: "Artikel",
      icon: HiNewspaper,
      to: "/artikel",
      menuHide: true,
      childs: [
        {
          name: "Buat Artikel",
          icon: HiOutlineChevronDoubleRight,
          to: "/buat-artikel",
        },
        {
          name: "Kelola Artikel",
          icon: HiOutlineChevronDoubleRight,
          to: "/kelola-artikel",
        },
      ],
    },
  ];

  return (
    <aside
      className={`fixed lg:top-0 md:top-10 ${
        visibleSide ? "left-0" : "left-[-250px]"
      } bottom-0 flex flex-col w-sidebar bg-gradient-to-b from-sky-400 to-sky-500 transition-all duration-300`}
    >
      <header className="lg:flex md:hidden justify-center items-center w-full h-12 text-lg text-white font-black uppercase tracking-wider">
        Dashboard Desa
      </header>
      <ul className="flex flex-col text-gray-200 mt-3 px-2 gap-2">
        {menuList.map((menu, i) => {
          const [hideMenu, setHideMenu] = useState<boolean | undefined>(
            menu.menuHide
          );
          // const isActive = hideMenu === i;
          const menuClass =
            hideMenu || location.pathname.includes(menu.to)
              ? "h-auto"
              : "h-0 overflow-hidden";

          if (menu.childs) {
            return (
              <li key={i}>
                <button
                  className={`outline-0 flex gap-2 items-center justify-between w-full px-3 py-2 rounded-md ${
                    location.pathname.includes(menu.to)
                      ? "bg-sky-500 text-white "
                      : "hover:bg-sky-500 hover:text-white "
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setHideMenu((prev) => {
                      return !prev;
                    });
                  }}
                >
                  <span className="flex items-center gap-2">
                    <menu.icon /> {menu.name}
                  </span>
                  <span>
                    <HiChevronRight />
                  </span>
                </button>
                <ul
                  className={`flex flex-col bg-sky-400 gap-2 rounded-md ${menuClass} transition-all duration-300`}
                >
                  {menu.childs.map((item, j) => {
                    return (
                      <li key={`${i}${j}`}>
                        <Link
                          to={`${menu.to}${item.to}`}
                          className={`flex gap-2 items-center px-3 py-2 rounded-md ${
                            location.pathname.includes(`${menu.to}${item.to}`)
                              ? "bg-sky-500 text-white "
                              : "hover:bg-sky-500 hover:text-white "
                          }`}
                        >
                          <item.icon /> {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          }

          return (
            <li key={i}>
              <Link
                to={menu.to}
                className={`flex gap-2 items-center px-3 py-2 rounded-md ${
                  location.pathname == "/"
                    ? "bg-sky-500 text-white "
                    : "hover:bg-sky-500 hover:text-white "
                }`}
              >
                <menu.icon /> {menu.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
});

export default Sidebar;
