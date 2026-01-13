import { useState, useEffect, useRef } from "react";
import "./FloatingMenu.css";

const FloatingMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="floating-menu" ref={menuRef}>
      {/* Button */}
      <button
        className={`menu-btn ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Dropdown */}
      <div className={`menu-dropdown ${open ? "show" : ""}`}>
        <a href="/">Home</a>
        <a href="/book-table">Book a Table</a>
        <a href="/nearby">Nearby Restaurants</a>
        <a href="/view-menus">View Menus</a>
        <a href="/admin-dashboard">Admin</a>
      </div>
    </div>
  );
};

export default FloatingMenu;
