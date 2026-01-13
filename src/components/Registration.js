import { useState } from "react";
import "../Styles/Register.css";


export default function Registration({ onClose, onSwitchToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <div className="auth-overlay">
      <div className="auth-card">
        <button className="auth-close" onClick={onClose}>×</button>

        <span className="auth-eyebrow">RestoCabana</span>
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">
          Join our world of refined dining
        </p>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="auth-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="auth-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="auth-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>

          <button className="auth-primary-btn">
            Register
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?
          <span onClick={onSwitchToLogin}> Sign in</span>
        </p>
      </div>
    </div>
  );
}
