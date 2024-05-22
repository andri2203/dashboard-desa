import { useState } from "react";
import { useLocation } from "react-router-dom";
import Content from "./Components/Content";

import Sidebar from "./Components/Sidebar";
import AppContext from "./Context/AppContext";

function Layout() {
  const [visibleSide, setVisibleSide] = useState<boolean>(true);
  const location = useLocation();
  let locationPathName = location.pathname;

  const handleVisibleSide = () => {
    setVisibleSide((prev) => {
      return !prev;
    });
  };

  return (
    <main className="relative bg-gray-100 text-gray-400 min-h-screen font-serif">
      <AppContext.Provider
        value={{ visibleSide, handleVisibleSide, locationPathName }}
      >
        {/* {locationPathName} */}
        <Sidebar />
        <Content />
      </AppContext.Provider>
    </main>
  );
}

export default Layout;
