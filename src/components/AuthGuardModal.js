import React from "react";
import "../Styles/AuthGuard.css";

const AuthGuardModal = ({ isOpen, onClose, onLogin, message }) => {
  if (!isOpen) return null;

  return (
    <div className="auth-guard-overlay" onClick={onClose}>
      <div className="auth-guard-card" onClick={(e) => e.stopPropagation()}>
        <div className="auth-guard-content">
          <span className="gold-eyebrow">EXCLUSIVE ACCESS</span>
          <h2 className="luxury-heading">Experience RestoCabana</h2>
          <div className="minimal-divider"></div>
          
          <p className="guard-message">{message}</p>
          
          <div className="auth-guard-actions">
            {/* CLEAN TEXT-ONLY LOGIN BUTTON */}
            <button className="btn-pure-white" onClick={onLogin}>
              LOGIN TO CONTINUE
            </button>
            
            <button className="btn-pure-gray" onClick={onClose}>
              MAYBE LATER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
        
export default AuthGuardModal;