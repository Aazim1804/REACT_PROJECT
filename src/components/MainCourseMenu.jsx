import React from "react";
import "../Styles/MenuPage.css";

const mainCourseSections = [
  {
    category: "European Classics",
    items: [
      {
        name: "Beef Wellington",
        desc: "Prime beef tenderloin coated in mushroom duxelles and prosciutto, wrapped in golden puff pastry, served with red wine demi-glace.",
        price: "₹3,200",
      },
      {
        name: "Lobster Thermidor",
        desc: "Lobster meat cooked in a rich brandy cream sauce, gratinated with Gruyère and served in-shell.",
        price: "₹3,800",
      },
      {
        name: "Osso Buco alla Milanese",
        desc: "Braised veal shank with white wine, vegetables, gremolata, and saffron risotto.",
        price: "₹2,900",
      },
      {
        name: "Herb-Crusted Rack of Lamb",
        desc: "Roasted lamb rack with Dijon-herb crust, pea-mint purée, and fondant potatoes.",
        price: "₹3,100",
      },
      {
        name: "Dover Sole Meunière",
        desc: "Whole sole sautéed in brown butter with lemon and parsley — a timeless French classic.",
        price: "₹4,200",
      },
    ],
  },
  {
    category: "Asian Specialties",
    items: [
      {
        name: "Peking Duck",
        desc: "Crispy-skinned duck carved tableside, served with pancakes, hoisin, and scallions.",
        price: "₹3,600",
      },
      {
        name: "Wagyu Beef Teppanyaki",
        desc: "A5 Japanese Wagyu lightly seared with sea salt, garlic chips, and ponzu.",
        price: "₹6,500",
      },
      {
        name: "Royal Lamb Biryani",
        desc: "Dum-cooked basmati rice layered with saffron-marinated lamb and aromatic spices.",
        price: "₹2,200",
      },
      {
        name: "Black Cod with Miso",
        desc: "Sweet miso-marinated cod broiled until caramelized and delicately flaky.",
        price: "₹2,800",
      },
    ],
  },
  {
    category: "Latin & Middle Eastern Icons",
    items: [
      {
        name: "Argentinian Asado Steak",
        desc: "Wood-fired ribeye grilled over open flame, served with chimichurri.",
        price: "₹3,400",
      },
      {
        name: "Moroccan Lamb Tagine",
        desc: "Slow-cooked lamb with apricots, almonds, honey, and saffron couscous.",
        price: "₹2,500",
      },
      {
        name: "Peruvian Lomo Saltado",
        desc: "Stir-fried beef tenderloin with onions, tomatoes, soy glaze, and crisp potatoes.",
        price: "₹2,300",
      },
    ],
  },
  {
    category: "Coastal & American Staples",
    items: [
      {
        name: "Pan-Seared Chilean Sea Bass",
        desc: "Buttery sea bass with wilted greens and lemon-caper emulsion.",
        price: "₹3,200",
      },
      {
        name: "Maryland Jumbo Lump Crab Cakes",
        desc: "Golden crab cakes with minimal filler, remoulade, and charred citrus.",
        price: "₹2,700",
      },
      {
        name: "Wild Mushroom & Truffle Pappardelle",
        desc: "Hand-cut pasta with porcini, chanterelles, truffle cream, and aged parmesan.",
        price: "₹2,100",
      },
    ],
  },
];

const MainCourseMenu = () => {
  return (
    <div className="menu-page">
      {/* HEADER */}
      <section className="menu-header">
        <span className="menu-eyebrow">RestoCabana</span>
        <h1 className="menu-title">Main Course</h1>
        <p className="menu-subtitle">
          A global journey of refined flavors, signature techniques, and timeless
          culinary traditions.
        </p>
      </section>

      {/* MENU CONTENT */}
      <section className="menu-sections">
        {mainCourseSections.map((section, index) => (
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

export default MainCourseMenu;
