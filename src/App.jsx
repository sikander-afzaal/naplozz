import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ProgressBar from "react-progressbar-on-scroll";
import Loader from "./Components/Loader";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Explore from "./Pages/Explore/Explore";
import Home from "./Pages/Home/Home";
import Eco from "./Pages/Ecosystem/Eco";
import Education from "./Pages/Education/Education";
import Marketplace from "./Pages/Marketplace/Marketplace";
import Chain from "./Pages/Chain/Chain";
import Industry from "./Pages/Industry/Industry";
import About from "./Pages/About/About";
import Faq from "./Pages/Faq/Faq";
import Info from "./Pages/Info/Info";
import Blog from "./Pages/Blog/Blog";
import Pricing from "./Pages/Pricing/Pricing";
import Contact from "./Pages/Contact/Contact";
import BlogDetail from "./Pages/BlogDetail/BlogDetail";
import CookiesPopup from "./Components/CookiesPopup";

function App() {
  const [disclaimerOnce, setDisclaimerOnce] = useState(false);
  const [cookies, setCookies] = useState(false);
  const [loader, setLoader] = useState(true);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  //loader functionality
  useEffect(() => {
    setTimeout(() => {
      setCookies(true);
    }, 11000);
    const body = document.querySelector("html");
    body.style.overflow = "hidden";
    setTimeout(() => {
      setLoader(false);
    }, 6700);
    setTimeout(() => {
      body.style.overflow = "auto";
    }, 6200);
  }, []);

  return (
    <div className="App">
      <ProgressBar gradient gradientColor="#33FDFF" color="#8715E6" />
      {loader && <Loader />}
      {cookies && <CookiesPopup setModal={setCookies} />}

      <Header />
      <Routes>
        <Route element={<Home loader={loader} />} path="/" />
        <Route
          element={
            <Explore
              loader={loader}
              setOnce={setDisclaimerOnce}
              once={disclaimerOnce}
            />
          }
          path="/explore"
        />
        <Route element={<Eco />} path="/ecosystem" />
        <Route element={<Education />} path="/education" />
        <Route element={<Marketplace />} path="/marketplace" />
        <Route element={<Chain />} path="/chain" />
        <Route element={<Industry />} path="/industry" />
        <Route element={<About />} path="/about" />
        <Route element={<Faq />} path="/faq" />
        <Route element={<Info />} path="/info" />
        <Route element={<Blog />} path="/blogs" />
        <Route element={<Pricing />} path="/pricing" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<BlogDetail />} path="/blog/:id" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
