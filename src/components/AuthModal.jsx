import { useState } from "react";
import Login from "./Login";
import Registration from "./Registration";

export default function AuthModal() {
  const [activeModal, setActiveModal] = useState(null);
  // "login" | "register" | null

  return (
    <>
      {/* Example buttons (you can move these to Navbar) */}
      <button onClick={() => setActiveModal("login")}>
        Login
      </button>

      <button onClick={() => setActiveModal("register")}>
        Register
      </button>

      {/* LOGIN MODAL */}
      {activeModal === "login" && (
        <Login
          onClose={() => setActiveModal(null)}
          onSwitchToRegister={() => setActiveModal("register")}
        />
      )}

      {/* REGISTER MODAL */}
      {activeModal === "register" && (
        <Registration
          onClose={() => setActiveModal(null)}
          onSwitchToLogin={() => setActiveModal("login")}
        />
      )}
    </>
  );
}
