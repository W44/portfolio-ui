import React, { useEffect, useRef } from "react";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const sidebarRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 100; // Account for header + progress bar
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      closeSidebar(); // Close sidebar after clicking a tab
    }
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeSidebar]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[9998]" />
      )}
      
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 w-64 h-full bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-[9999] shadow-lg`}
      >
        <button 
          onClick={closeSidebar} 
          className="p-4 text-lg hover:bg-gray-700 w-full text-left flex items-center"
        >
          <span className="mr-2">✖</span> Close
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
          <button
            onClick={() => scrollToSection("experience")}
            className="text-lg hover:bg-gray-700 p-2 rounded-md"
          >
            💼 Experience
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className="text-lg hover:bg-gray-700 p-2 rounded-md"
          >
            🎓 Education
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-lg hover:bg-gray-700 p-2 rounded-md"
          >
            🚀 Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-lg hover:bg-gray-700 p-2 rounded-md"
          >
            📬 Contact
          </button>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
