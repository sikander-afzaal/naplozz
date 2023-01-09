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

function App() {
  const [loader, setLoader] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 6700);
  }, []);

  return (
    <div className="App">
      <ProgressBar gradient gradientColor="#33FDFF" color="#8715E6" />
      {loader ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Explore />} path="/explore" />
            <Route element={<Eco />} path="/ecosystem" />
            <Route element={<Education />} path="/education" />
            <Route element={<Marketplace />} path="/marketplace" />
            <Route element={<Chain />} path="/chain" />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
