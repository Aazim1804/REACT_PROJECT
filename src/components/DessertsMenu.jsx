import React, { useState } from "react";
import "../Styles/MenuPage.css";

const dessertSections = [
  {
    category: "European & Continental Classics",
    items: [
      {
        name: "Grand Marnier Soufflé",
        desc: "A gravity-defying orange liqueur sponge served with vanilla crème anglaise.",
        price: "₹1,450",
        img: "https://media.istockphoto.com/id/1188520654/photo/fruit-dessert.webp?a=1&b=1&s=612x612&w=0&k=20&c=EJT8tcBiIvRsJkzs1MGZ5EG-h_w_4nP9gkQ0kSrmldQ=",
      },
      {
        name: "Classic Crème Brûlée",
        desc: "Silky Tahitian vanilla custard beneath a shatter-crisp caramelized sugar lid.",
        price: "₹950",
        img: "https://media.istockphoto.com/id/496032549/photo/creme-brulee.webp?a=1&b=1&s=612x612&w=0&k=20&c=WOpXWUAnuTaXdKTjbgnxjL4Pv4wh-Fr_EN6-NjM5kRI=",
      },
      {
        name: "Tarte Tatin",
        desc: "Caramelized apple tart served warm with salted caramel gelato.",
        price: "₹1,150",
        img: "https://images.unsplash.com/photo-1616953882462-8a583e0afbb4?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Dark Chocolate Fondant",
        desc: "Molten-centered Valrhona chocolate cake with hazelnut praline.",
        price: "₹1,250",
        img: "https://images.unsplash.com/photo-1719257795483-fd36e004549e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RGFyayUyMENob2NvbGF0ZSUyMEZvbmRhbnR8ZW58MHx8MHx8fDA%3D",
      },
    ],
  },
];

const DessertsMenu = () => {
  const [preview, setPreview] = useState(dessertSections[0].items[0]);

  return (
    <div className="menu-page">
      {/* HEADER */}
      <section className="menu-header">
        <span className="menu-eyebrow">RestoCabana</span>
        <h1 className="menu-title">Desserts</h1>
        <p className="menu-subtitle">
          A refined conclusion — crafted sweetness, timeless technique.
        </p>
      </section>

      {/* CONTENT */}
      <section className="menu-layout">
        {/* LEFT — MENU */}
        <div className="menu-list">
          {dessertSections.map((section, index) => (
            <div className="menu-section" key={index}>
              <h2 className="menu-section-title">{section.category}</h2>

              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="menu-item"
                  onMouseEnter={() => setPreview(item)}
                >
                  <div className="menu-item-header">
                    <h3>{item.name}</h3>
                    <span className="menu-price">{item.price}</span>
                  </div>
                  <p className="menu-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* RIGHT — PREVIEW */}
        <div className="menu-preview-fixed">
          <div
            className="menu-preview-image"
            style={{ backgroundImage: `url(${preview.img})` }}
          />
          <div className="menu-preview-text">
            <h3>{preview.name}</h3>
            <p>{preview.desc}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DessertsMenu;
