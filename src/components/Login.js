import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";


export default function Login({ onClose, onSwitchToRegister }) {
  const [email, setEmail] = useState("admin@restocabana.com");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@restocabana.com" && password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      onClose();
      navigate("/admin-dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="auth-overlay">
      <div className="auth-card">
        <button className="auth-close" onClick={onClose}>×</button>

        <span className="auth-eyebrow">RestoCabana</span>
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">
          Sign in to continue your dining journey
        </p>

        <form onSubmit={handleLogin}>
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

          <div className="auth-row">
            <label className="auth-checkbox">
              <input type="checkbox" />
              <span /> Remember me
            </label>
            <span className="auth-link">Forgot password?</span>
          </div>

          <button className="auth-primary-btn">
            Sign In
          </button>
        </form>

        <p className="auth-footer">
          Don’t have an account?
          <span onClick={onSwitchToRegister}> Create one</span>
        </p>
      </div>
    </div>
  );
}
