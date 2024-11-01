import "./App.css";
import Home from "./Routes/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Layouts/Header";
import Login from "./Routes/Login";
import Register from "./Routes/Register";
import AlumniDirectory from "./Routes/AlumniDirectory";
import About from "./Routes/About";
import Events from "./Routes/Events";
import Donation from "./Routes/Donation";
import Careers from "./Routes/Careers";
import NetworkingHub from "./Routes/NetworkingHub";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/alumni-directory" element={<AlumniDirectory />} />
          <Route path="/networking-hub" element={<NetworkingHub />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
