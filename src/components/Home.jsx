import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Home.css";

const Home = ({ user, setShowLogin }) => {
  const navigate = useNavigate();

  // Function to intercept navigation and check auth state
  const handleProtectedAction = (path) => {
    if (user) {
      navigate(path);
    } else {
      // If not logged in, trigger the login modal
      setShowLogin(true);
    }
  };

  return (
    <div className="home-container">

      {/* ================= HERO ================= */}
      <section className="hero-full">
        <div className="hero-overlay" />

        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <br />
            <span>RestoCabana</span>
          </h1>

          <div className="hero-buttons">
            {/* These use buttons instead of direct Links for logic control */}
            <button 
              onClick={() => handleProtectedAction("/book-table")} 
              className="hero-btn"
            >
              Book a Table
            </button>

            <button 
              onClick={() => handleProtectedAction("/view-menus")} 
              className="hero-btn"
            >
              Main Menu
            </button>

            <button 
              onClick={() => handleProtectedAction("/delivery")} 
              className="hero-btn"
            >
              Order
            </button>

            
          </div>

          <p className="hero-footer-text">
            Dine in, delivery, and carry out now available in all locations
          </p>
        </div>
      </section>

      {/* ================= CHEF ================= */}
      <section className="chef-philosophy">
        <div className="chef-image">
          <img
            src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf"
            alt="Executive Chef"
          />
        </div>

        <div className="chef-content">
          <span className="chef-eyebrow">From the Kitchen</span>

          <blockquote className="chef-quote">
            “Great food is not about complexity.
            <br />
            It’s about honesty, patience, and respect for ingredients.”
          </blockquote>

          <p className="chef-story">
            At RestoCabana, every dish begins with a story — rooted in tradition,
            shaped by experience, and refined through years of dedication.
            Our kitchen celebrates regional flavors while embracing modern craft,
            delivering food that feels familiar yet unforgettable.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="specials-intro">
        <span className="specials-eyebrow">RestoCabana</span>
        <h2 className="specials-heading">Signature Specials</h2>
        <p className="specials-subtext">
          A curated expression of our most celebrated dishes and crafted drinks,
          inspired by tradition and perfected by time.
        </p>
      </section>

      {/* ================= EDITORIAL GRID ================= */}
      <section className="signature-editorial">
        {[
          {
            name: "Italian Truffle Pasta",
            img: "https://images.unsplash.com/photo-1729875746931-c5edc5ec6468?q=80&w=1470&auto=format&fit=crop",
          },
          {
            name: "Sun Salted Branzino",
            img: "https://images.getrecipekit.com/20250425201447-branzino-20reipe-20tumbnail.jpg?aspect_ratio=16:9&quality=90&",
          },
          {
            name: "Grilled Sea Bass",
            img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
          },
          {
            name: "Liquid Gold Cocktail",
            img: "https://witchcraftcocktails.com/wp-content/uploads/2025/07/Liquid-Gold-Drink-Cover-Cocktail-Mocktail-1140x1524.png",
          },
        ].map((dish, index) => (
          <div className="editorial-column" key={index}>
            <span className="editorial-title">{dish.name}</span>
            <div
              className="editorial-bg"
              style={{ backgroundImage: `url(${dish.img})` }}
            />
          </div>
        ))}
      </section>

    </div>
  );
};

export default Home;
