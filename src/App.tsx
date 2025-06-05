import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { Navbar } from "./components/navbar";
import { SearchProvider } from "./context/searchContext";
import Footer from "./components/footer";

import { Home } from "./pages/home";
import { AuthProvider } from "./context/authContext";
import { CartProvider } from "./context/cartContext";
import { Cart } from "./pages/cart";
import { Checkout } from "./pages/checkout";
import { CreateAccount } from "./pages/createAccount";
import ProductPage from "./pages/productPage";


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
               <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
      <Footer />
    </SearchProvider>
  );
}

export default App;
