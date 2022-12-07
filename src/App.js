import './App.css';
import './MoodIndex.css';
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.js"
import DrawIndex from "./DrawIndex.js";
import MoodIndex from "./MoodIndex.js";
import Landing from "./Landing.js";

function App() {
  return (

    <div className="layout">

      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tfw" element={<DrawIndex />} />
        <Route path="/feels" element={<MoodIndex />} />
      </Routes>
    </div>
  );
}

export default App;
