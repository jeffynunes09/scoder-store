import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <nav className="navbar">
          <img src="./src/assets/logo.png" alt="Logo" className="logo" />
          <ul className="nav-list">
            <li><NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : undefined}>Home</NavLink></li>
            <li><NavLink to="/cart" className={({ isActive }) => isActive ? "active-link" : undefined}>Cart</NavLink></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
