import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/MenuExperience.css";

const menuData = {
  Starters: {
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    title: "Starters",
    desc: "Small plates designed to awaken the palate and prepare the journey ahead.",
    route: "/menu/starters",
  },
  Mains: {
    img: "https://plus.unsplash.com/premium_photo-1667682942059-33ee7a49cb28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZCUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Mains",
    desc: "Our most celebrated dishes, rooted in tradition and elevated by craft.",
    route: "/menu/mains",
  },
  Seafood: {
    img: "https://plus.unsplash.com/premium_photo-1708077028677-df5154bc19de?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Seafood",
    desc: "Fresh coastal inspirations prepared with regional flavors and balance.",
    route: "/menu/seafood",
  },
  Desserts: {
    img: "https://images.unsplash.com/photo-1674403442429-95df05a192e6?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // ✅ WORKING
    title: "Desserts",
    desc: "Classic and contemporary sweets crafted to conclude the experience.",
    route: "/menu/desserts",
  },
  Beverages: {
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
    title: "Beverages",
    desc: "Signature cocktails, artisanal drinks, and timeless pours.",
    route: "/menu/beverages",
  },
};

const fallbackImage =
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe";

const MenuExperience = () => {
  const [active, setActive] = useState("Starters");
  const navigate = useNavigate();

  return (
    <div className="menu-page">

      {/* HEADER */}
      <section className="menu-header">
        <span className="menu-eyebrow">RestoCabana</span>
        <h1 className="menu-title">The Menu</h1>
        <p className="menu-subtitle">
          A curated selection of dishes and beverages that define our culinary identity.
        </p>
      </section>

      {/* CONTENT */}
      <section className="menu-content">

        {/* LEFT PANEL */}
        <div className="menu-left">
          <ul className="menu-categories">
            {Object.keys(menuData).map((cat) => (
              <li
                key={cat}
                className={active === cat ? "active" : ""}
                onMouseEnter={() => setActive(cat)}
                onClick={() => navigate(menuData[cat].route)}
              >
                {cat}
                <span className="menu-arrow">→</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT PANEL */}
        <div className="menu-right">
          <div className="menu-preview">
            <img
              src={menuData[active].img}
              alt={active}
              onError={(e) => {
                e.target.src = fallbackImage;
              }}
            />
            <div className="menu-preview-overlay">
              <h2>{menuData[active].title}</h2>
              <p>{menuData[active].desc}</p>
              <span className="menu-hint">Click to explore</span>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default MenuExperience;
