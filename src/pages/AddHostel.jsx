import "./AddHostel.css";
import { useState } from "react";

function AddHostel() {
  const [form, setForm] = useState({
    name: "",
    location: "",
    price: ""
  });

  const [floors, setFloors] = useState(0);
  const [rooms, setRooms] = useState({});

  // IMAGE STATE (FILE OBJECTS)
  const [images, setImages] = useState({
    front: null,
    adminBlock: null,
    corridor: null,
    room: null,
    dining: null,
    washroom: null
  });

  // TEXT INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // FLOORS
  const handleFloorsChange = (e) => {
    const value = Number(e.target.value);
    setFloors(value);

    let newRooms = {};
    for (let i = 1; i <= value; i++) {
      newRooms[i] = "";
    }
    setRooms(newRooms);
  };

  const handleRoomChange = (floor, value) => {
    setRooms({ ...rooms, [floor]: value });
  };

  // IMAGE UPLOAD HANDLER
  const handleImageChange = (e) => {
    const { name, files } = e.target;

    setImages({
      ...images,
      [name]: files[0] // store first selected image
    });
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const hostelData = {
      ...form,
      floors,
      rooms,
      images
    };

    console.log("FINAL HOSTEL DATA:", hostelData);
    alert("Hostel Added Successfully!");
  };

  return (
    <div className="add-hostel-container">

      <h2>Add Hostel</h2>

      <form onSubmit={handleSubmit} className="form-box">

        {/* BASIC INFO */}
        <input
          name="name"
          placeholder="Hostel Name"
          onChange={handleChange}
        />

        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />

        <input
          name="price"
          placeholder="Recommended Price"
          onChange={handleChange}
        />

        {/* FLOORS */}
        <input
          type="number"
          placeholder="Number of Floors"
          value={floors}
          onChange={handleFloorsChange}
        />

        {/* ROOMS PER FLOOR */}
        {Object.keys(rooms).map((floor) => (
          <div key={floor} className="floor-box">
            <label>Floor {floor} Rooms</label>
            <input
              type="number"
              value={rooms[floor]}
              onChange={(e) =>
                handleRoomChange(floor, e.target.value)
              }
            />
          </div>
        ))}

        {/* IMAGE UPLOADS */}

        <label>Front Hostel Photo</label>
        <input type="file" name="front" onChange={handleImageChange} />

        <label>Admin Block Photo</label>
        <input type="file" name="adminBlock" onChange={handleImageChange} />

        <label>Corridor Photo</label>
        <input type="file" name="corridor" onChange={handleImageChange} />

        <label>Inside Room Photo</label>
        <input type="file" name="room" onChange={handleImageChange} />

        <label>Dining Hall Photo</label>
        <input type="file" name="dining" onChange={handleImageChange} />

        <label>Washroom Photo</label>
        <input type="file" name="washroom" onChange={handleImageChange} />

        <button type="submit">Add Hostel</button>

      </form>

    </div>
  );
}

export default AddHostel;