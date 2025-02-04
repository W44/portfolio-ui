import React from "react";

const Sidebar = ({ isOpen, closeSidebar }) => {
  // Function to scroll to a section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      closeSidebar(); // Close sidebar after clicking a tab
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-gray-900 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-20 shadow-lg`}
    >
      <button onClick={closeSidebar} className="p-4 text-lg hover:bg-gray-700 w-full">
        ✖ Close
      </button>

      <nav className="flex flex-col p-4 space-y-4">
        <button
          onClick={() => scrollToSection("description")}
          className="text-lg hover:bg-gray-700 p-2 rounded-md"
        >
          📜 Description
        </button>
        <button
          onClick={() => scrollToSection("summary")}
          className="text-lg hover:bg-gray-700 p-2 rounded-md"
        >
          📌 Summary
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
