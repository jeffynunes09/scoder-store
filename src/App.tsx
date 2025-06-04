import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import "./App.css";
function App() {
return (
<CartProvider>
<BrowserRouter>
<header className="header">
<Link to="/">Home</Link>
<Link to="/cart">Cart</Link>
</header>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/cart" element={<Cart />} />
</Routes>
</BrowserRouter>
</CartProvider>
);
}
export default App;