import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { CreateAccount } from "./pages/createAccount";
import {Navbar} from "./components/Navbar";

function App() {
  return (
    <AuthProvider>
    <CartProvider>
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
