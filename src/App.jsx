import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ListYourHostel from "./pages/Owner/ListYourHostel";
import OwnerRegister from "./pages/Owner/OwnerRegister";
import OwnerVerification from "./pages/Owner/OwnerVerification";
import HostelCount from "./pages/Owner/HostelCount";
import BasicDetails from "./pages/Owner/BasicDetails";
import Amenities from "./pages/Owner/Amenities";
import StudyRoomDetails from "./pages/Owner/StudyRoomDetails";
import FoodTimetable from "./pages/Owner/FoodTimetable";
import RoomPricing from "./pages/Owner/RoomPricing";
import BuildingSetup from "./pages/Owner/BuildingSetup";
import RulesPolicies from "./pages/Owner/RulesPolicies";
import LaunchListing from "./pages/Owner/LaunchListing";
import SuccessPage from "./pages/Owner/SuccessPage";


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
         <Route
          path="/amenities"
          element={<Amenities />}
        />
        <Route
  path="/study-room"
  element={<StudyRoomDetails />}
/>
  <Route
          path="/food-timetable"
          element={<FoodTimetable />}
        />
         <Route
          path="/room-pricing"
          element={<RoomPricing />}
        />
         <Route
          path="/building-setup"
          element={<BuildingSetup />}
        />
         <Route
          path="/rules-policies"
          element={<RulesPolicies />}
        />

         <Route
          path="/launch-listing"
          element={<LaunchListing />}
        />
        
        <Route
  path="/success-page"
  element={<SuccessPage />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;