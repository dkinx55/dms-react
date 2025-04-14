import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTachometerAlt,
  FaFileUpload,
  FaFolderOpen,
  FaShareAlt,
  FaSearch,
  FaTrash,
  FaCog,
} from "react-icons/fa";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const linkClasses = (path: string) =>
    `flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-700 ${
      location.pathname === path ? "bg-gray-700" : ""
    }`;

  return (
    <div
      className={`h-screen ${
        collapsed ? "w-16" : "w-64"
      } bg-gray-800 text-white flex flex-col transition-all duration-300`}
    >
      <div className="flex items-center justify-between px-4 py-6 border-b border-gray-700">
        {!collapsed && <span className="text-2xl font-bold">📁 DMS</span>}
        <button onClick={toggleSidebar} className="">
          <FaBars className="text-black" style={{ fontSize: "1.5rem" }} />
        </button>
      </div>

      <nav className="flex-1 p-2 space-y-2">
        <Link to="/dashboard" className={linkClasses("/dashboard")}>
          <FaTachometerAlt />
          {!collapsed && <span>Dashboard</span>}
        </Link>
        <Link to="/upload" className={linkClasses("/upload")}>
          <FaFileUpload />
          {!collapsed && <span>Upload Document</span>}
        </Link>
        <Link to="/my-documents" className={linkClasses("/my-documents")}>
          <FaFolderOpen />
          {!collapsed && <span>My Documents</span>}
        </Link>
        <Link to="/shared" className={linkClasses("/shared")}>
          <FaShareAlt />
          {!collapsed && <span>Shared Documents</span>}
        </Link>
        <Link to="/search" className={linkClasses("/search")}>
          <FaSearch />
          {!collapsed && <span>Search Files</span>}
        </Link>
        <Link to="/trash" className={linkClasses("/trash")}>
          <FaTrash />
          {!collapsed && <span>Trash</span>}
        </Link>
        <Link to="/settings" className={linkClasses("/settings")}>
          <FaCog />
          {!collapsed && <span>Settings</span>}
        </Link>
      </nav>

      {!collapsed && (
        <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
          © 2025 DMS Inc.
        </div>
      )}
    </div>
  );
};

export default Sidebar;
