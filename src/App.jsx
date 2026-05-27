import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import AddHostel from "./pages/AddHostel";

import HostelDetails from "./pages/HostelDetails";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* ADD HOSTEL */}

        <Route
          path="/add-hostel"
          element={<AddHostel />}
        />

        {/* HOSTEL DETAILS */}

        <Route
          path="/hostel-details"
          element={<HostelDetails />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;