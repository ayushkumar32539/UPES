import "./App.css";
import Home from "./Pages/Home/Home";
import Sign from "./Pages/userlogin/Sign";
import Info from './Pages/Info/Info';
import GarbageAvailability from "./Pages/Garbage Availability/GarbageAvailability";
import GarbageNearby from "./Pages/Garbage Nearby/GarbageNearby";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Updatebed from "./Pages/Updatebed/Updatebed";
import District from "./Pages/Districtwise/District";
import Landing from "./Pages/Landing/Landing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Landing/>}/>
          <Route path="/home" element={<Home/>} />
          <Route path="/Sign" element={<Sign/>} />
          <Route path="/Info" element={<Info/>} />
          <Route path="/GarbageNearby" element={<GarbageNearby/>} />
          <Route path="/garbageavailability" element={<GarbageAvailability/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/Updatebed" element={<Updatebed/>} />
          <Route path="/districtwise" element={<District/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
