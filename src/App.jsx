import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";

import AddHostel from "./pages/AddHostel";

import HostelDetails from "./pages/HostelDetails";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

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