import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";

import AddHostel from "./pages/AddHostel";

import HostelDetails from "./pages/HostelDetails";
import ListYourHostel from "./pages/ListYourHostel";
import OwnerRegister from "./pages/OwnerRegister";
import OwnerVerification from "./pages/OwnerVerification";
import HostelCount from "./pages/HostelCount";
import HostelBasicDetails from "./pages/HostelBasicDetails";
import Amenities from "./pages/Amenities";
import StudyRoomDetails from "./pages/StudyRoomDetails";
import FoodTimetable from "./pages/FoodTimetable";
import HostelFinalReview from "./pages/HostelFinalReview";



function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />
        <Route
  path="/list-your-hostel"
  element={<ListYourHostel />}
/>
<Route
  path="/owner-register"
  element={<OwnerRegister />}
/>
<Route
  path="/owner-verification"
  element={<OwnerVerification />}
/>
<Route
  path="/hostel-count"
  element={<HostelCount />}
/>
<Route
  path="/hostel-basic-details"
  element={<HostelBasicDetails />}
/>
<Route
  path="/amenities"
  element={<Amenities />}
/>
<Route
  path="/study-room-details"
  element={<StudyRoomDetails />}
/>
<Route
  path="/food-timings"
  element={<FoodTimetable />}
/>
 <Route path="/hostel-final-review" element={<HostelFinalReview />} />


        <Route
          path="/add-hostel"
          element={<AddHostel />}
        />

        <Route
          path="/hostel-details/:id"
          element={<HostelDetails />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;