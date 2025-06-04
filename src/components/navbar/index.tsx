import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSearch } from "../../context/SearchContext";
import { useAuth } from "../../hooks/useAuth";
import "./index.css"
export function Navbar() {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const { search, setSearch } = useSearch();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Buscar:", search);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <NavLink to="/">
          <img src="public/assets/logo.png" alt="Logo" className="logo" />
        </NavLink>

        {/* Barra de busca */}
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Buscar produtos, marcas e muito mais…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>

        {/* Links e perfil */}
        <div className="right-section">


          {user ? (
            <div className="profile-menu">
              <button className="profile-btn" onClick={() => setShowDropdown(!showDropdown)}>
                <img src="public/assets/profile.jpg" alt="Perfil" className="profile-img" />
                <span>{user.name}</span>
              </button>

              {showDropdown && (
                <div className="dropdown">
                  <button onClick={logout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
          <div className="create-account">
                <NavLink to="/create-account" className="login-btn">
              Criar Conta
            </NavLink>
          </div>
          )}
          <div className="create-account">
          <NavLink to="/cart" className={({ isActive }) => isActive ? "active-link" : ""}>
            🛒
          </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
