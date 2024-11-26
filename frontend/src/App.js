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
import AlumniDetailSection from "./pages/AlumniDetailSection";
import JobsPortal from "./pages/JobsPortal";
import CareerResources from "./pages/CareerResources";
import CareerEvents from "./pages/CareerEvents";
import CareerAdvising from "./pages/CareerAdvising";
import UpcomingEvents from "./pages/UpcomingEvents";
import TechReunions from "./pages/TechReunions";
import LeadershipConference from "./pages/LeadershipConference";
import WomensConference from "./pages/WomensConference";

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
          <Route
            path="/events/leadership-conference"
            element={<LeadershipConference />}
          />
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
