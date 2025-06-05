import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import "./index.css";
import { useCart } from "../../hooks/useCart";
import { useSearch } from "../../context/searchContext";

export function Navbar() {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const { search, setSearch } = useSearch();
  const { cart } = useCart();
  const [inputValue, setInputValue] = useState(search);

  useEffect(() => {
    if (user) setShowDropdown(false);
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    setSearch("")
    e.preventDefault();
    setSearch(inputValue.trim());
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/">
          <img src="/assets/logo.png" alt="Logo" className="logo"
            onClick={() => { setSearch("") }}
          />
        </NavLink>

        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Buscar produtos, marcas e muito mais…"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>

        <div className="right-section">
          {user ? (
            <div className="profile-menu">
              <button
                className="profile-btn"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <img
                  src="/assets/profile.jpg"
                  alt="Perfil"
                  className="profile-img"
                />
                <span>{user.email}</span>
              </button>

              {showDropdown && (
                <div className="dropdown">
                  <button onClick={logout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <div className="create-account">
              <NavLink to="/login" className="login-btn">
                Entrar
              </NavLink>
            </div>
          )}

          <div className="create-account parent">
            <span className="countProductsInCart">{cart.length}</span>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              🛒
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
