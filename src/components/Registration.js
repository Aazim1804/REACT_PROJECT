import React, { useState } from "react";
import { 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  sendEmailVerification 
} from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../firebase.js"; 
import "../Styles/Register.css";

export default function Registration({ onClose, onSwitchToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (password !== confirm) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      // Creates and stores credentials in Firebase Auth database
      const res = await createUserWithEmailAndPassword(auth, email, password);
      
      // Sends verification link to the manual email provided
      await sendEmailVerification(res.user);
      
      setIsSent(true); 
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    } finally {
      setLoading(false);
    }
  };

  const handleSocialRegister = async (provider) => {
    setError("");
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        onClose(); 
      }
    } catch (err) {
      setError("Social registration failed. Try email.");
    }
  };

  if (isSent) {
    return (
      <div className="auth-overlay">
        <div className="auth-card" style={{ textAlign: "center", padding: "40px" }}>
          <div style={{ fontSize: "50px", marginBottom: "20px" }}>✉️</div>
          <h2 className="auth-title" style={{ color: "#d4af37" }}>Check Your Mail</h2>
          <p className="auth-subtitle">We have registered your details. Please click the link in <b>{email}</b> to activate your account.</p>
          <button className="auth-primary-btn" onClick={onClose}>Finish</button>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-overlay">
      <div className="auth-card">
        <button className="auth-close" onClick={onClose}>×</button>
        <span className="auth-eyebrow">RestoCabana</span>
        <h2 className="auth-title">Create Account</h2>
        
        {error && <div className="auth-error-box" style={styles.errorBox}>{error}</div>}

        <form onSubmit={handleRegister}>
          <div className="auth-group">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="auth-group">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="auth-group">
            <label>Confirm Password</label>
            <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required />
          </div>
          <button type="submit" className="auth-primary-btn" disabled={loading}>
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <div className="auth-divider"><span>OR</span></div>

        <div className="social-auth-group">
          <button className="social-btn google" onClick={() => handleSocialRegister(googleProvider)}>
            Continue with Google
          </button>
          <button className="social-btn facebook" onClick={() => handleSocialRegister(facebookProvider)}>
            Continue with Facebook
          </button>
        </div>

        <p className="auth-footer">
          Already a member? <span onClick={onSwitchToLogin} style={{cursor:'pointer', color:'#d4af37'}}>Sign in</span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  errorBox: {
    background: "rgba(255, 77, 77, 0.1)",
    border: "1px solid #ff4d4d",
    color: "#ff4d4d",
    padding: "10px",
    borderRadius: "4px",
    fontSize: "0.8rem",
    marginBottom: "15px",
    textAlign: "center"
  }
};