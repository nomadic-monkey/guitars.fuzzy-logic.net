import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GuitarDetail from "./pages/GuitarDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Preferred, descriptive guitar URL */}
        <Route path="/guitars/:slug" element={<GuitarDetail />} />

        {/* Legacy route retained temporarily so old links do not break */}
        <Route path="/guitar/:id" element={<GuitarDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
