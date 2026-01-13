import React, { useState } from "react";
import "../Styles/Menu.css";

const starters = [
  {
    title: "Tuna Tartare",
    desc: "Sushi-grade ahi tuna, avocado, citrus yuzu, gyoza crisps.",
    price: "₹1,450",
    img: "https://images.unsplash.com/photo-1761314015436-1145c9ffd4de?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Peruvian Ceviche",
    desc: "Fresh white fish cured in tiger’s milk, red onion, cilantro.",
    price: "₹1,350",
    img: "https://plus.unsplash.com/premium_photo-1669261881745-1b59cb9adcfb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Classic Shrimp Cocktail",
    desc: "Jumbo prawns, refined horseradish cocktail sauce, lemon.",
    price: "₹1,550",
    img: "https://plus.unsplash.com/premium_photo-1707648137279-ac428840539c?q=80&w=966&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Beef Carpaccio",
    desc: "Prime beef, arugula, parmesan shavings, truffle oil.",
    price: "₹1,650",
    img: "https://images.unsplash.com/photo-1727243866425-3bf2cbf7480a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Burrata & Heirloom Tomatoes",
    desc: "Creamy burrata, seasonal tomatoes, basil pesto.",
    price: "₹1,250",
    img: "https://plus.unsplash.com/premium_photo-1720616740784-a52a32536c44?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Gambas al Ajillo",
    desc: "Spanish garlic prawns, smoked paprika, sourdough.",
    price: "₹1,450",
    img: "https://images.unsplash.com/photo-1619860705619-1e0ba34091e0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Pan-Seared Scallops",
    desc: "Golden scallops, cauliflower purée, pea-mint emulsion.",
    price: "₹1,750",
    img: "https://plus.unsplash.com/premium_photo-1718821752817-a2611010f8f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Crispy Calamari Fritti",
    desc: "Flash-fried squid, citrus aioli, marinara.",
    price: "₹1,150",
    img: "https://images.unsplash.com/photo-1682264895449-f75b342cbab6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const StartersMenu = () => {
  const [preview, setPreview] = useState(starters[0]);

  return (
    <div className="menu-page">
      {/* HEADER */}
      <section className="menu-header">
        <span className="menu-eyebrow">RestoCabana Menu</span>
        <h1 className="menu-title">Small Plates / Starters</h1>
        <p className="menu-subtitle">
          Crafted beginnings — light, elegant, and designed to awaken the palate.
        </p>
      </section>

      {/* CONTENT */}
      <section className="menu-layout">
        {/* LEFT — LIST */}
        <div className="menu-list">
          {starters.map((item, index) => (
            <div
              className="menu-item"
              key={index}
              onMouseEnter={() => setPreview(item)}
            >
              <div className="menu-item-header">
                <h3>{item.title}</h3>
                <span className="menu-price">{item.price}</span>
              </div>
              <p className="menu-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* RIGHT — STICKY PREVIEW */}
        <div className="menu-preview-fixed">
          <div className="menu-preview-fixed-inner">
            <div
              className="menu-preview-image"
              style={{ backgroundImage: `url(${preview.img})` }}
            />
            <div className="menu-preview-text">
              <h3>{preview.title}</h3>
              <p>{preview.desc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartersMenu;
