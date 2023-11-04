import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/App.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./views/Home";
import Contacto from "./views/Contacto";
import Notfound from "./views/Notfound";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
