import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AppBar from "./components/AppBar";
import TourDetail from "./pages/TourDetail";

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour/:id" element={<TourDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
