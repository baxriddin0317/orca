// import components
import Header from "./components/Header";

import { Routes, Route } from "react-router-dom"
// pages
import Home from "./pages/Home";
import Profil from "./pages/profil";
import Login from "./pages/Login";
import News from "./pages/News";

function App() {
  window.localStorage.setItem("login", "Adminstrator");
  window.localStorage.setItem("password", "12345");
  window.localStorage.setItem("ruxsat", "false");
  return (
    <div className="App">
      <Header />
      <main className="max-w-[1000px] mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
