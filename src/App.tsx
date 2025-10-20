import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GuitarDetail from "./pages/GuitarDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guitar/:id" element={<GuitarDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
