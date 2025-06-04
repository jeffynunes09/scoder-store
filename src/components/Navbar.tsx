import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";


export function Navbar() {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      <img src="/src/assets/image-header.jpg" alt="Logo" className="logo" />
      
      <ul className="nav-list">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={({ isActive }) => isActive ? "active-link" : ""}>
            Cart
          </NavLink>
        </li>
      </ul>

      {user ? (
        <div className="profile-menu">
          <button className="profile-btn" onClick={() => setShowDropdown(!showDropdown)}>
            <img src="/profile-icon.png" alt="Perfil" className="profile-img" />
            <span>{user.name}</span>
          </button>

          {showDropdown && (
            <div className="dropdown">
              <button onClick={logout}>Logout</button>
            </div>
          )}
        </div>
      ) : (
        <NavLink to="/create-account" className="login-btn">
          Criar Conta
        </NavLink>
      )}
    </nav>
  );
}
