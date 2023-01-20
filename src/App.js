import "../src/styles/App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Kupuna } from "./components/Kupuna";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Blog } from "./components/Blog";
// import { Articles } from "./components/Articles";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/kupuna" element={<Kupuna />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/articles" element={<Articles />} /> */}
      </Routes>
    </div>
  );
}

export default App;
