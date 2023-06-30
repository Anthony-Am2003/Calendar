import "./App.css";
import HomePage from "./views/home/home";
import LoginPage from "./views/login/login";
import {Routes, Route} from "react-router-dom";
import RegisterPage from "./views/register/register";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/events" element={<FormView />} /> */}
        <Route path="/calendars" />
      </Routes>
    </div>
  );
}

export default App;
