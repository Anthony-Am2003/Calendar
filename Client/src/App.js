import "./App.css";
import HomePage from "./views/home/home";
import Form from "./views/form/form";
import Calendars from "./views/calendars/calendars";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<Form />} />
        <Route path="/calendars" element={<Calendars />} />
      </Routes>
    </div>
  );
}

export default App;
