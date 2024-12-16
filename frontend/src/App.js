import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AlumniDirectory from "./pages/AlumniDirectory";

import AdminControlPanel from "./pages/AdminControlPanel";

import AlumniDetailSection from "./Components/AlumniDetailSection";

import JobsPortal from "./Components/JobsPortal";
import CareerResources from "./Components/CareerResources";
import CareerEvents from "./Components/CareerEvents";
import CareerAdvising from "./Components/CareerAdvising";

import UpcomingEvents from "./Components/UpcomingEvents";
import TechReunions from "./Components/TechReunions";
import WomensConference from "./Components/WomensConference";
import VirtualMeet from "./Components/VirtualMeet";

import NetworkingHub from "./pages/NetworkingHub";
import Donation from "./pages/Donation";

import About from "./pages/About";
import RequestRegister from "./pages/RequestRegister";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/admin-panel" element={<AdminControlPanel />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />

          <Route path="/donation" element={<Donation />} />
          <Route path="/alumni-directory" element={<AlumniDirectory />} />
          <Route
            path="/alumni-directory/:id"
            element={<AlumniDetailSection />}
          />
          <Route path="/networking-hub" element={<NetworkingHub />} />

          <Route path="/careers/jobs" element={<JobsPortal />} />
          <Route
            path="/careers/career-resources"
            element={<CareerResources />}
          />
          <Route path="/careers/career-events" element={<CareerEvents />} />
          <Route path="/careers/career-advising" element={<CareerAdvising />} />

          <Route path="/events/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/events/tech-reunions" element={<TechReunions />} />
          <Route path="/events/conferences" element={<VirtualMeet />} />
          <Route
            path="/events/womens-conference"
            element={<WomensConference />}
          />
          <Route path="/request-register" element={<RequestRegister />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
