import { Route, Routes } from "react-router-dom";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Explore from "./Pages/Explore/Explore";
import Home from "./Pages/Home/Home";

function App() {
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
