import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Import every page
import HomePage     from "./pages/HomePage";
import AboutPage    from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ApproachPage from "./pages/ApproachPage";
import BenefitsPage from "./pages/BenefitsPage";
import ContactPage  from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";

export default function AppRouter() {
  return (
    <BrowserRouter>

      {/* Navbar shows on EVERY page — it lives outside <Routes> */}
      <Navbar />
      
      

      {/* Each Route maps a URL path → a page component */}
      <Routes>
        <Route path="/"          element={<HomePage />}     />
        <Route path="/about"     element={<AboutPage />}    />
        <Route path="/services"  element={<ServicesPage />} />
        <Route path="/approach"  element={<ApproachPage />} />
        <Route path="/benefits"  element={<BenefitsPage />} />
        <Route path="/contact"   element={<ContactPage />}  />
        <Route path="*"          element={<NotFoundPage />} />  {/* 404 */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}