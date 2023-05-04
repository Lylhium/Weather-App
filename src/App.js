import "./App.css";
//components
import { Navbar } from "./components/Navbar/Navbar";
//import { Routes, Route, BrowserRouter } from "react-router-dom";
import PanelClima from "./components/PanelClima/PanelClima";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PanelClima />
    </div>
  );
}

export default App;
