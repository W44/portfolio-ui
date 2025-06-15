import { Menu } from "lucide-react";
import "./Header.css";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header fixed top-0 left-0 w-full bg-black text-white p-5 flex justify-center items-center">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <button onClick={toggleSidebar} className="absolute left-4 p-2">
        <Menu size={24} />
      </button>
    </header>
  );
};

export default Header;
