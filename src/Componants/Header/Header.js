import { Menu } from "lucide-react";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white p-5 flex justify-center items-center z-1">
      <h1 className="text-xl font-bold">Portfolio Arslaan</h1>
      <button onClick={toggleSidebar} className="absolute left-4 p-2">
        <Menu size={24} />
      </button>
    </header>
  );
};

export default Header;
