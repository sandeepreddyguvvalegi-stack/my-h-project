import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ListYourHostel from "./pages/Owner/ListYourHostel";
import OwnerRegister from "./pages/Owner/OwnerRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* List Your Hostel */}
        <Route
          path="/list-your-hostel"
          element={<ListYourHostel />}
        />

        {/* Owner Register */}
        <Route
          path="/owner-register"
          element={<OwnerRegister />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;