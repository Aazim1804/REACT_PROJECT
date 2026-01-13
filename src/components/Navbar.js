import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg luxury-navbar fixed-top">
        <div className="container-fluid px-5">

          {/* Brand */}
          <Link className="navbar-brand luxury-brand" to="/">
            RestoCabana
            <span className="brand-sub">Fine Dining Est. 1998</span>
          </Link>

          {/* Toggle */}
          <button
            className="navbar-toggler luxury-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto luxury-links">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/view-menus">Menus</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/locations">Locations</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reservations">Reservations</Link>
              </li>
            </ul>

            {/* Auth Buttons */}
            <div className="d-flex gap-3 luxury-actions">
              <button
                className="btn luxury-btn-outline"
                onClick={() => {
                  setShowRegister(false);
                  setShowLogin(true);
                }}
              >
                Login
              </button>

              <button
                className="btn luxury-btn-solid"
                onClick={() => {
                  setShowLogin(false);
                  setShowRegister(true);
                }}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modals */}
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onSwitchToRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        />
      )}

      {showRegister && (
        <Registration
          onClose={() => setShowRegister(false)}
          onSwitchToLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}
    </>
  );
};

export default Navbar;
