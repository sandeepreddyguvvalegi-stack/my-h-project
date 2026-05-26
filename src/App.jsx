import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddHostel from "./pages/AddHostel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-hostel" element={<AddHostel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;