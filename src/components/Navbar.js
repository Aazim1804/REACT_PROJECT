import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase"; 
import Login from "./Login";
import Registration from "./Registration";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); 
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg luxury-navbar fixed-top">
        <div className="container-fluid px-5 h-100">
          {/* LEFT: BRAND */}
          <Link className="navbar-brand luxury-brand" to="/">
            <span className="brand-main">RestoCabana</span>
            <span className="brand-sub">FINE DINING EST. 1998</span>
          </Link>

          <button
            className="navbar-toggler luxury-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse h-100" id="navbarNav">
            {/* CENTER: NAV LINKS (Menus removed) */}
            <ul className="navbar-nav mx-auto luxury-links">
              <li className="nav-item"><Link className="nav-link" to="/">HOME</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/locations">LOCATIONS</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/reservations">RESERVATIONS</Link></li>
            </ul>

            {/* RIGHT: AUTH ACTIONS */}
            <div className="luxury-actions">
              {user ? (
                <div className="d-flex align-items-center">
                  <Link to="/profile" className="profile-container">
                    <div className="avatar-ring">
                        <img 
                          src={user.photoURL || `https://ui-avatars.com/api/?background=101010&color=d4af37&bold=true&name=User`} 
                          alt="Profile" 
                          className="navbar-profile-img"
                        />
                    </div>
                    <span className="luxury-profile-text">PROFILE</span>
                  </Link>
                  <span className="auth-divider-pipe">|</span>
                  <button className="logout-text-btn" onClick={handleLogout}>LOGOUT</button>
                </div>
              ) : (
                <div className="d-flex align-items-center">
                  <button className="luxury-btn-minimal" onClick={() => setShowLogin(true)}>LOGIN</button>
                  <span className="auth-divider-pipe">|</span>
                  <button className="luxury-btn-minimal" onClick={() => setShowRegister(true)}>REGISTER</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {showLogin && <Login onClose={() => setShowLogin(false)} onSwitchToRegister={() => { setShowLogin(false); setShowRegister(true); }} />}
      {showRegister && <Registration onClose={() => setShowRegister(false)} onSwitchToLogin={() => { setShowRegister(false); setShowLogin(true); }} />}
    </>
  );
};

export default Navbar;