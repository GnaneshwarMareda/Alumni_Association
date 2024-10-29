import "./App.css";
import Home from "./Routes/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Layouts/Header";
import StudentLogin from "./Routes/StudentLogin";
import Register from "./Routes/Register";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<StudentLogin />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
