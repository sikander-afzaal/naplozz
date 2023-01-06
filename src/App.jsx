import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ProgressBar from "react-progressbar-on-scroll";
import Loader from "./Components/Loader";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Explore from "./Pages/Explore/Explore";
import Home from "./Pages/Home/Home";

function App() {
  const [loader, setLoader] = useState(true);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    const body = document.querySelector("html");
    body.style.overflow = "hidden";
    setTimeout(() => {
      body.style.overflow = "auto";
      setLoader(false);
    }, 4500);
  }, []);

  return (
    <div className="App">
      <ProgressBar gradient gradientColor="#33FDFF" color="#8715E6" />
      {loader && <Loader />}
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Explore />} path="/explore" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
