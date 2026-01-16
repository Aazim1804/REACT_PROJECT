import React from "react";
import "../Styles/Locations.css";

const branches = [
  {
    id: 1,
    name: "The Azure Coast",
    city: "Monaco",
    address: "12 Avenue des Beaux-Arts, Monte Carlo",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1000",
    description: "Experience fine dining with an uninterrupted view of the Mediterranean horizon, where the sea meets the sky."
  },
  {
    id: 2,
    name: "Golden Hour Atrium",
    city: "Dubai",
    address: "Burj Khalifa District, Level 42",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000",
    description: "A glass-walled sanctuary where the desert sun meets contemporary luxury and curated culinary arts."
  },
  {
    id: 3,
    name: "The Ivy Veranda",
    city: "London",
    address: "24 Mayfair Gardens, London W1J",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000",
    description: "An intimate, botanical escape hidden in the heart of the historic Mayfair district."
  },
  {
    id: 4,
    name: "The Obsidian Peak",
    city: "Zermatt",
    address: "Matterhorn Ridge, Penthouse 1",
    image: "https://media.istockphoto.com/id/1126687457/photo/luxury-restaurant-table-with-beautiful-landscape-view-in-alpine-mountains.webp?a=1&b=1&s=612x612&w=0&k=20&c=zLgb7vY5YIM2azhNG-W_OJiZ3Gec3d0LPUs5uAxYMag=",
    description: "Dine amidst the clouds in our glass-encased peak, offering a 360-degree view of the Swiss Alps."
  },
  {
    id: 5,
    name: "Sakura Pavilion",
    city: "Kyoto",
    address: "Gion District, Heritage Lane",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1000",
    description: "A zen-inspired sanctuary blending traditional Japanese architecture with modern luxury."
  },
  {
    id: 6,
    name: "The Velvet Loft",
    city: "Paris",
    address: "6th Arrondissement, Rooftop Terrace",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1000",
    description: "An evening escape overlooking the sparkling Eiffel Tower, defined by rich textures and intimate lighting."
  }
];

const Locations = () => {
  return (
    <div className="locations-container">
      <div className="locations-header">
        <span className="gold-eyebrow">The World of RestoCabana</span>
        <h1>Global Branches</h1>
        <div className="header-divider"></div>
      </div>

      <div className="locations-grid">
        {branches.map((branch) => (
          <div key={branch.id} className="location-card">
            <div className="location-image-wrapper">
              <img src={branch.image} alt={branch.name} />
              <div className="location-badge">{branch.city}</div>
            </div>
            <div className="location-content">
              <h3>{branch.name}</h3>
              <p className="location-address">{branch.address}</p>
              <p className="location-description">{branch.description}</p>
              <button className="explore-btn">Explore Venue</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;