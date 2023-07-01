import "./App.css";
import HomePage from "./views/home/home";
import LoginPage from "./views/login/login";
import RegisterPage from "./views/register/register";
import {Routes, Route} from "react-router-dom";
import YCalendar from "./components/YCalendar/YCalendar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/year" element={<YCalendar />} />
      </Routes>
    </div>
  );
}

export default App;
