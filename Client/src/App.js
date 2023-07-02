import "./App.css";
import LoginPage from "./views/login/login";
import RegisterPage from "./views/register/register";
import { Routes, Route } from "react-router-dom";
import YCalendar from "./components/YCalendar/YCalendar";
import Month from "./views/month/month";
import Events from "./components/AllEvents/Events";
import EventDetail from "./components/EventsDetail/EventsDetail";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/month" element={<Month />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/year" element={<YCalendar />} />
        <Route path="/events" element={<Events />} />
        <Route path="/eventsday" element={<EventDetail />} />
      </Routes>
    </div>
  );
}

export default App;
