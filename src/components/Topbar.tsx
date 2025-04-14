import React, { useState, useRef, useEffect } from "react";

const Topbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    // Clear session/localStorage and redirect to login
    localStorage.clear();
    window.location.href = "/";
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-end items-center bg-white px-6 py-3 shadow-md sticky top-0 z-10 relative">
      <div className="flex items-center gap-3" ref={dropdownRef}>
        <span className="text-gray-700 text-sm">Welcome,</span>
        <span className="font-semibold text-gray-900">John Doe</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="w-10 h-10 rounded-full cursor-pointer"
          onClick={toggleDropdown}
        />

        {dropdownOpen && (
          <div className="absolute right-6 top-16 bg-white border rounded-md shadow-lg w-40 z-20">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
