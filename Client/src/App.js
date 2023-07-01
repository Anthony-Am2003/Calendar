import "./App.css";
import LoginPage from "./views/login/login";
import RegisterPage from "./views/register/register";
import { Routes, Route } from "react-router-dom";
import YCalendar from "./components/YCalendar/YCalendar";
import Month from "./views/month/month";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/month" element={<Month />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/year" element={<YCalendar />} />
      </Routes>
    </div>
  );
}

export default App;
