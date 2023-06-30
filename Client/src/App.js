import "./App.css";
import HomePage from "./views/home/home";
import LoginPage from "./views/login/login";
import RegisterPage from "./views/register/register";
import Calendars from "./views/calendars/calendars";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/calendars" element={<Calendars />} />
      </Routes>
    </div>
  );
}

export default App;
