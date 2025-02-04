import { useState } from "react";
import { Menu } from "lucide-react";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white p-4 flex justify-between items-center z-1">
      <h1 className="text-xl font-bold">Portfolio</h1>
      <button onClick={toggleSidebar} className="p-2">
        <Menu size={24} />
      </button>
    </header>
  );
};

export default Header;
