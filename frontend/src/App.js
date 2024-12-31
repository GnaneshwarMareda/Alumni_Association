import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

import AdminControlPanel from "./pages/AdminControlPanel";
import RequestRegister from "./pages/RequestRegister";

import AlumniDirectory from "./pages/AlumniDirectory";
import AlumniDetailSection from "./Components/AlumniDetailSection";

import JobsPortal from "./Components/JobsPortal";
import CareerResources from "./Components/CareerResources";
import CareerEvents from "./Components/CareerEvents";
import CareerAdvising from "./Components/CareerAdvising";

import UpcomingEvents from "./Components/UpcomingEvents";
import TechReunions from "./Components/TechReunions";
import WomensConference from "./Components/WomensConference";

import NetworkingHub from "./pages/NetworkingHub";
import Donation from "./pages/Donation";
import About from "./pages/About";

import ProtectedRoute from "./Protected/ProtectedRoute";
import CheckAlreadyLogged from "./Protected/CheckAlreadyLogged";
import NotFound from "./pages/NotFound";
import Conferences from "./Components/Conferences";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          {/* Admin Panel */}
          <Route
            path="/admin-panel"
            element={
              <ProtectedRoute
                component={AdminControlPanel}
                requiredRoles={["admin"]}
              />
            }
          />
          <Route path="/request-register" element={<RequestRegister />} />

          {/* Home */}
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<CheckAlreadyLogged component={Login} />}
          />
          <Route path="/register" element={<Register />} />

          <Route
            path="/donation"
            element={
              <ProtectedRoute
                component={Donation}
                requiredRoles={["student", "alumni"]}
              />
            }
          />
          <Route
            path="/alumni-directory"
            element={
              <ProtectedRoute
                component={AlumniDirectory}
                requiredRoles={["student", "alumni"]}
              />
            }
          />

          <Route
            path="/alumni/profile/:id"
            element={
              <ProtectedRoute
                component={AlumniDetailSection}
                requiredRoles={["student", "alumni"]}
              />
            }
          />
          <Route
            path="/networking-hub"
            element={
              <ProtectedRoute
                component={NetworkingHub}
                requiredRoles={["student", "alumni"]}
              />
            }
          />
          {/* Careers */}
          <Route
            path="/careers/jobs"
            element={
              <ProtectedRoute
                component={JobsPortal}
                requiredRoles={["student", "alumni"]}
              />
            }
          />
          <Route
            path="/careers/career-resources"
            element={
              <ProtectedRoute
                component={CareerResources}
                requiredRoles={["student", "alumni"]}
              />
            }
          />
          <Route
            path="/careers/career-events"
            element={
              <ProtectedRoute
                component={CareerEvents}
                requiredRoles={["student", "alumni"]}
              />
            }
          />
          <Route
            path="/careers/career-advising"
            element={
              <ProtectedRoute
                component={CareerAdvising}
                requiredRoles={["student", "alumni"]}
              />
            }
          />

          {/* Events */}
          <Route
            path="/events/upcoming-events"
            element={
              <ProtectedRoute
                component={UpcomingEvents}
                requiredRoles={["student", "alumni"]}
              />
            }
          />
          <Route
            path="/events/tech-reunions"
            element={
              <ProtectedRoute
                component={TechReunions}
                requiredRoles={["student", "alumni"]}
              />
            }
          />
          <Route
            path="/events/conferences"
            element={
              <ProtectedRoute
                component={Conferences}
                requiredRoles={["student", "alumni"]}
              />
            }
          />
          <Route
            path="/events/womens-conference"
            element={<WomensConference />}
          />

          {/* Networking Hub */}
          <Route
            path="/networking-hub"
            element={
              <ProtectedRoute
                component={NetworkingHub}
                requiredRoles={["student, alumni"]}
              />
            }
          />

          {/* Donation */}
          <Route
            path="/donation"
            element={
              <ProtectedRoute
                component={Donation}
                requiredRoles={["student, alumni"]}
              />
            }
          />

          {/* About */}
          <Route path="/about" element={<About />} />
          <Route path="/request-register" element={<RequestRegister />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
