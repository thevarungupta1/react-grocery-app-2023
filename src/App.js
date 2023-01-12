import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:catId/:catName" element={<ProtectedRoute Component={ProductPage} />} />
        <Route path="/products/detail/:id" element={<ProtectedRoute Component={ProductDetailPage} />} />
        <Route path="/about" element={<ProtectedRoute Component={AboutPage} />} />
        <Route path="/contact" element={<ProtectedRoute Component={ContactPage} />} />
        <Route path="/register" element= { <RegisterPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/cart" element={ <CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
