import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <nav className="navbar">
          <div className="nav-container">
            <img src="./src/assets/logo.png" alt="Logo" className="logo" />
            <ul className="nav-list">
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : undefined)} end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart" className={({ isActive }) => (isActive ? "active-link" : undefined)}>
                  Carrinho
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
