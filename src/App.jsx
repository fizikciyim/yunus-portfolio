import "./App.css";
import Iconbar from "./sablonlar/Iconbar";
import Navbar from "./sablonlar/Navbar";
import Header from "./sablonlar/Header";
import About from "./sablonlar/About";
import Portfolio from "./sablonlar/Portfolio";
import Contact from "./sablonlar/Contact";
import Footer from "./sablonlar/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./sablonlar/404";
import { useLocation } from "react-router-dom";
import Anaheader from "./sablonlar/Anaheader";
import Register from "./sablonlar/Register";
import Comments from "./sablonlar/Comments";
import Signin from "./sablonlar/Signin";
import { AuthProvider } from "./sablonlar/AuthContext";

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
    location.pathname !== "/comments";

  return (
    <>
      {!isNotFound && <Navbar />}
      {!isNotFound && <Iconbar />}

      <main
        // className="d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Anaheader />

        {children}
      </main>

      {/* {!isNotFound && <Footer />} */}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/photos" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<Signin />} />

            <Route path="/comments" element={<Comments />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
