import logo from "./logo.svg";
import "./App.css";
//components
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PanelClima from "./components/PanelClima/PanelClima";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/weather-app" element={<PanelClima />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
