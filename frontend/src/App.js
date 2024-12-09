import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";

import Register from "./Routes/Register";
import Login from "./Routes/Login";
import Home from "./Routes/Home";
import AlumniDirectory from "./Routes/AlumniDirectory";

import AdminControlPanel from "./pages/AdminControlPanel";

import AlumniDetailSection from "./pages/AlumniDetailSection";

import Careers from "./Routes/Careers";
import JobsPortal from "./pages/JobsPortal";
import CareerResources from "./pages/CareerResources";
import CareerEvents from "./pages/CareerEvents";
import CareerAdvising from "./pages/CareerAdvising";

import Events from "./Routes/Events";
import UpcomingEvents from "./pages/UpcomingEvents";
import TechReunions from "./pages/TechReunions";
import LeadershipConference from "./pages/LeadershipConference";
import WomensConference from "./pages/WomensConference";
import VirtualMeet from "./Components/VirtualMeet";

import NetworkingHub from "./Routes/NetworkingHub";
import Donation from "./Routes/Donation";

import About from "./Routes/About";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
