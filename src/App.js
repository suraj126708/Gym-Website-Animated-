import "./App.css";
import ContactUs from "./components/ContactUs";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Trainers from "./components/Trainers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/trainers" element={<Trainers />} />
      </Routes>
    </div>
  );
}

export default App;
