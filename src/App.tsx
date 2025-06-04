import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { Navbar } from "./components/navbar";
import { SearchProvider } from "./context/SearchContext";
import Footer from "./components/footer/Footer";
import { CreateAccount } from "./pages/createAccount";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <SearchProvider>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
               <Route path="/produto/:id" element={<ProductPage />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
      <Footer />
    </SearchProvider>
  );
}

export default App;
