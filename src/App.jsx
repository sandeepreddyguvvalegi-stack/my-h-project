import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ListYourHostel from "./pages/Owner/ListYourHostel";
import OwnerRegister from "./pages/Owner/OwnerRegister";
import OwnerVerification from "./pages/Owner/OwnerVerification";
import HostelCount from "./pages/Owner/HostelCount";
import HostelBasicDetails from "./pages/Owner/HostelBasicDetails";
import Amenities from "./pages/Owner/Amenities";
import StudyRoom from "./pages/Owner/StudyRoom";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/list-your-hostel" element={<ListYourHostel />} />
        <Route path="/owner-register" element={<OwnerRegister />} />
        <Route path="/owner-verification" element={<OwnerVerification />} />
        <Route path="/hostel-count" element={<HostelCount />} />
        <Route path="/hostel-basic-details" element={<HostelBasicDetails />} />

        {/* ✅ AMENITIES ROUTE */}
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/study-room" element={<StudyRoom />} />
       

      </Routes>

    </BrowserRouter>
  );
}

export default App;