import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./views/Home";
import Contacto from "./views/Contacto";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
