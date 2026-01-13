import React from "react";
import "../Styles/MenuPage.css";

const seafoodSections = [
  {
    category: "French & Mediterranean Classics",
    items: [
      {
        name: "Bouillabaisse",
        desc: "Traditional Provençal fish stew with assorted seafood, saffron broth, rouille, and garlic croutons.",
        price: "₹3,200",
      },
      {
        name: "Lobster Thermidor",
        desc: "Brandy-infused lobster meat in a rich cream sauce, gratinéed with Gruyère and served in-shell.",
        price: "₹3,800",
      },
      {
        name: "Sole Meunière",
        desc: "Whole Dover sole sautéed in beurre noisette with lemon and parsley.",
        price: "₹4,200",
      },
      {
        name: "Bourride",
        desc: "Languedoc-style white fish stew enriched with garlic aioli.",
        price: "₹2,900",
      },
      {
        name: "Coquilles Saint-Jacques",
        desc: "Sea scallops poached in white wine, mushroom purée, and cheese gratin.",
        price: "₹3,100",
      },
      {
        name: "Salt-Crusted Branzino",
        desc: "Whole European sea bass baked in sea salt, cracked open tableside.",
        price: "₹3,400",
      },
      {
        name: "Grilled Octopus a la Gallega",
        desc: "Charred octopus with smoked paprika, olive oil, and sea salt.",
        price: "₹2,600",
      },
      {
        name: "Moules Marinières",
        desc: "Fresh mussels steamed with white wine, shallots, garlic, and cream.",
        price: "₹2,200",
      },
    ],
  },
  {
    category: "Japanese & East Asian Precision",
    items: [
      {
        name: "Miso-Glazed Black Cod",
        desc: "Sweet saikyo miso-marinated cod broiled until caramelized.",
        price: "₹2,900",
      },
      {
        name: "Unagi Donburi",
        desc: "Grilled freshwater eel glazed with tare sauce over steamed rice.",
        price: "₹3,100",
      },
      {
        name: "Hamachi Kama",
        desc: "Grilled yellowtail collar with crisp skin and melting interior.",
        price: "₹2,800",
      },
      {
        name: "Chili Crab",
        desc: "Singaporean mud crab in a sweet-spicy tomato chili sauce.",
        price: "₹3,600",
      },
      {
        name: "Soft Shell Crab Tempura",
        desc: "Lightly battered crabs with ginger-soy tentsuyu.",
        price: "₹2,700",
      },
      {
        name: "Seafood Chirashi Bowl",
        desc: "Premium sashimi selection over seasoned sushi rice.",
        price: "₹3,500",
      },
      {
        name: "Cha Ca La Vong",
        desc: "Turmeric-marinated fish sautéed with dill and shrimp paste.",
        price: "₹2,600",
      },
      {
        name: "Steamed Ginger-Scallion Snapper",
        desc: "Whole snapper steamed with soy, sesame oil, and fresh ginger.",
        price: "₹3,000",
      },
    ],
  },
  {
    category: "Latin American & Caribbean Soul",
    items: [
      {
        name: "Pescado Zarandeado",
        desc: "Wood-fired Mexican snapper brushed with chili paste.",
        price: "₹2,900",
      },
      {
        name: "Moqueca Baiana",
        desc: "Brazilian seafood stew with coconut milk, tomatoes, and palm oil.",
        price: "₹2,800",
      },
      {
        name: "Arroz con Mariscos",
        desc: "Peruvian saffron rice with shrimp, scallops, and squid.",
        price: "₹2,700",
      },
      {
        name: "Aguachile de Camaron",
        desc: "Shrimp cured in lime, serrano chili, cucumber, and red onion.",
        price: "₹2,300",
      },
      {
        name: "Camarones a la Diabla",
        desc: "Jumbo prawns in smoky guajillo and arbol chili sauce.",
        price: "₹2,600",
      },
      {
        name: "Chupe de Camarones",
        desc: "Hearty Peruvian shrimp chowder with corn, potatoes, and milk.",
        price: "₹2,500",
      },
      {
        name: "Encebollado",
        desc: "Ecuadorian tuna stew with yuca and pickled onions.",
        price: "₹2,400",
      },
      {
        name: "Caribbean Lobster Curry",
        desc: "Spiny lobster tails in coconut curry with thyme and scotch bonnet.",
        price: "₹3,900",
      },
    ],
  },
  {
    category: "American & Coastal Classics",
    items: [
      {
        name: "Maryland Jumbo Lump Crab Cakes",
        desc: "Nearly all crab, lightly seared, served with classic remoulade.",
        price: "₹2,800",
      },
      {
        name: "Pan-Seared U-10 Scallops",
        desc: "Golden-crusted scallops over cauliflower or pea purée.",
        price: "₹3,200",
      },
      {
        name: "Cioppino",
        desc: "San Francisco seafood stew with crab, clams, shrimp, and scallops.",
        price: "₹3,100",
      },
      {
        name: "Cedar Plank Salmon",
        desc: "Wild salmon slow-roasted on cedar with maple or bourbon glaze.",
        price: "₹2,700",
      },
      {
        name: "Shrimp Creole",
        desc: "New Orleans-style shrimp in spicy tomato trinity sauce.",
        price: "₹2,600",
      },
      {
        name: "Maine Lobster Roll",
        desc: "Warm butter-poached lobster on toasted brioche.",
        price: "₹3,400",
      },
      {
        name: "Blackened Grouper",
        desc: "Cajun-spiced grouper seared in cast iron.",
        price: "₹2,800",
      },
      {
        name: "Clam Linguine (Alle Vongole)",
        desc: "Fresh clams with olive oil, chili flakes, and garlic.",
        price: "₹2,500",
      },
    ],
  },
];

const SeafoodMenu = () => {
  return (
    <div className="menu-page">
      <section className="menu-header">
        <span className="menu-eyebrow">RestoCabana</span>
        <h1 className="menu-title">Seafood</h1>
        <p className="menu-subtitle">
          A celebration of the ocean — refined techniques, global traditions,
          and the purest ingredients.
        </p>
      </section>

      <section className="menu-sections">
        {seafoodSections.map((section, index) => (
          <div className="menu-section" key={index}>
            <h2 className="menu-section-title">{section.category}</h2>

            <div className="menu-grid">
              {section.items.map((item, i) => (
                <div className="menu-item" key={i}>
                  <div className="menu-item-header">
                    <h3>{item.name}</h3>
                    <span>{item.price}</span>
                  </div>
                  <p className="menu-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SeafoodMenu;
