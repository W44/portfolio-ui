const Sidebar = ({ isOpen, closeSidebar }) => {
    return (
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <button onClick={closeSidebar} className="p-4 text-lg">Close</button>
        {/* Sidebar content goes here */}
      </div>
    );
  };
  
  export default Sidebar;
  