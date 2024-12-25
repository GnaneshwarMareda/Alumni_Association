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
import ProtectedRoute from "./Protected/ProtectedRoute";
import CheckAlreadyLogged from "./Protected/CheckAlreadyLogged";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/admin-panel"
            element={
              <ProtectedRoute
                component={AdminControlPanel}
                requiredRoles={["admin"]}
              />
            }
          />
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<CheckAlreadyLogged component={Login} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />

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
            path="/alumni-directory/:id"
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
                component={VirtualMeet}
                requiredRoles={["student", "alumni"]}
              />
            }
          />
          <Route
            path="/events/womens-conference"
            element={<WomensConference />}
          />
          <Route path="/request-register" element={<RequestRegister />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
