import { Route, Routes } from "react-router-dom";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
