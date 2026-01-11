import { Routes, Route } from "react-router-dom";
import About from "./pages/about.jsx";
import Home from "./pages/home.jsx";
import WorkDetail from "./pages/workdetails.jsx";
import Work from "./pages/work.jsx"; 
import Contact from "./pages/contact.jsx";
import ScreenTop from "./components/ScreenTop.jsx";

function App() {
  return (
    <>
    <ScreenTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/workdetails" element={<WorkDetail />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
