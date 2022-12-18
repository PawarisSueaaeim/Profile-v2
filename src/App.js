import "./App.css";
import Home from "./page/Home";
import Skills from "./page/Skills";
import Experience from "./page/Experience";
import Certificate from "./page/Certificate";
import Comment from "./page/Comment";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Certificate" element={<Certificate />} />
        <Route path="/Comment" element={<Comment />} />
      </Routes>
    </div>
  );
}

export default App;
