import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { Navbar } from "./components/navbar";
import { SearchProvider } from "./context/searchContext";
import Footer from "./components/footer";
import ProductPage from "./pages/ProductPage";
import { CreateAccount } from "./pages/CreateAccount";

function App() {
  return (
    <SearchProvider>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<CreateAccount />} />
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
