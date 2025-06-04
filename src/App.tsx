import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./pages/cart";
import { CartProvider } from "./context/cartContext";
import "./App.css";
import { AuthProvider } from "./context/authContext";
import { Navbar } from "./components/navbar";
import { SearchProvider } from "./context/searchContext";
import Footer from "./components/footer";
import ProductPage from "./pages/productPage";
import { CreateAccount } from "./pages/createAccount";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/checkout";

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
