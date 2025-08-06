import "./App.css";
import Iconbar from "./sablonlar/Iconbar";
import Navbar from "./sablonlar/Navbar";
import Header from "./sablonlar/Header";
import About from "./sablonlar/About";
import Portfolio from "./sablonlar/Portfolio";
import Contact from "./sablonlar/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./sablonlar/404";
import { useLocation } from "react-router-dom";
import Register from "./sablonlar/Register";
import Comments from "./sablonlar/Comments";
import Signin from "./sablonlar/Signin";
import { AuthProvider } from "./sablonlar/AuthContext";
import Footer from "./sablonlar/Footer";
import Art from "./sablonlar/Art";
import ScrollToTop from "./sablonlar/ScrollToTop";
import ResetPassword from "./sablonlar/ResetPassword";

function Layout({ children }) {
  const location = useLocation();

  // Eğer path '*' yani 404 ise
  const isNotFound =
    location.pathname !== "/" &&
    location.pathname !== "/about" &&
    location.pathname !== "/photos" &&
    location.pathname !== "/contact" &&
    location.pathname !== "/register" &&
    location.pathname !== "/signin" &&
    location.pathname !== "/art" &&
    location.pathname !== "/reset-password" &&
    location.pathname !== "/comments";

  return (
    <>
      {!isNotFound && <Navbar />}
      {!isNotFound && <Iconbar />}

      <div className="d-flex flex-column min-vh-100 divdiv">
        <main className="d-flex flex-fill justify-content-center align-items-center">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop /> {/* Buraya EKLİYORSUN */}
        <Layout>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/photos" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/art" element={<Art />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
