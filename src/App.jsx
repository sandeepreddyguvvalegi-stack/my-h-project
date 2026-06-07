import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ListYourHostel from "./pages/Owner/ListYourHostel";
import OwnerRegister from "./pages/Owner/OwnerRegister";
import OwnerVerification from "./pages/Owner/OwnerVerification";
import HostelCount from "./pages/Owner/HostelCount";
import BasicDetails
from "./pages/Owner/BasicDetails";


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

        {/* Owner Verification */}
        <Route
          path="/owner-verification"
          element={<OwnerVerification />}
        />

        {/* Hostel Count */}
        <Route
          path="/hostel-count"
          element={<HostelCount />}
        />
         <Route
          path="/basic-details"
          element={<BasicDetails />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;