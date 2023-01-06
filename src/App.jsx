import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Explore from "./Pages/Explore/Explore";
import Home from "./Pages/Home/Home";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
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
