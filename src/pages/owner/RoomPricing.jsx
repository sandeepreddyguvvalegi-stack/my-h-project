import "./RoomPricing.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaArrowLeft,
  FaBed,
  FaRupeeSign,
  FaWifi,
  FaUtensils,
  FaBolt,
  FaTshirt
} from "react-icons/fa";

function RoomPricing() {

  const navigate = useNavigate();

  const sharingOptions = [
    1,2,3,4,5,6,7,8,9,10,12
  ];

  const [selectedSharing,
    setSelectedSharing] = useState([]);

  const [roomData,
    setRoomData] = useState({});

  const [deposit,
    setDeposit] = useState("");

  const [advanceDays,
    setAdvanceDays] = useState(30);

  const [services,
    setServices] = useState({
      food:false,
      wifi:false,
      electricity:false,
      laundry:false
    });

  const toggleSharing = (share) => {

    if(selectedSharing.includes(share)){

      setSelectedSharing(
        selectedSharing.filter(
          s => s !== share
        )
      );

    }else{

      setSelectedSharing([
        ...selectedSharing,
        share
      ]);

    }
  };
  return(

<div className="pricingPage">

<button
className="backBtn"
onClick={() => navigate(-1)}
>
<FaArrowLeft/>
</button>

<div className="pricingCard">

<div className="header">

<h1>
Room Pricing & Availability
</h1>

<p>
Configure sharing options and pricing.
</p>

</div>

<div className="sectionTitle">
🛏 Select Available Sharing
</div>

<div className="sharingGrid">

{sharingOptions.map((share)=>(

<div
key={share}
className={`sharingCard ${
selectedSharing.includes(share)
? "active"
: ""
}`}
onClick={() =>
toggleSharing(share)
}
>

<FaBed/>

<span>
{share} Sharing
</span>

</div>

))}

</div>
<div className="sectionTitle">
💰 Pricing Details
</div>

{selectedSharing.map((share)=>(

<div
className="priceCard"
key={share}
>

<h3>
{share} Sharing
</h3>

<div className="inputGrid">

<input
type="number"
placeholder="Monthly Rent"
/>

<input
type="number"
placeholder="Total Beds"
/>

<input
type="number"
placeholder="Available Beds"
/>

</div>

</div>

))}
<div className="sectionTitle">
🔒 Security Deposit
</div>

<div className="depositGrid">

<div
className={`optionCard ${
deposit==="none"
? "active"
: ""
}`}
onClick={() =>
setDeposit("none")
}
>
No Deposit
</div>

<div
className={`optionCard ${
deposit==="1month"
? "active"
: ""
}`}
onClick={() =>
setDeposit("1month")
}
>
1 Month Rent
</div>

<div
className={`optionCard ${
deposit==="2month"
? "active"
: ""
}`}
onClick={() =>
setDeposit("2month")
}
>
2 Month Rent
</div>

</div>

<div className="sectionTitle">
📅 Advance Booking
</div>

<div className="daysGrid">

{[7,15,30,60,90].map((day)=>(

<div
key={day}
className={`optionCard ${
advanceDays===day
? "active"
: ""
}`}
onClick={() =>
setAdvanceDays(day)
}
>
{day} Days
</div>

))}

</div>
<div className="sectionTitle">
✨ Included Services
</div>

<div className="serviceGrid">

<div className="serviceCard">
<FaUtensils/>
<span>Food</span>
</div>

<div className="serviceCard">
<FaWifi/>
<span>WiFi</span>
</div>

<div className="serviceCard">
<FaBolt/>
<span>Electricity</span>
</div>

<div className="serviceCard">
<FaTshirt/>
<span>Laundry</span>
</div>

</div>
<div className="previewCard">

<h2>
📊 Preview
</h2>

<p>
Selected Sharing Types:
{selectedSharing.length}
</p>

<p>
Advance Booking:
{advanceDays} Days
</p>

</div>

<button
className="continueBtn"
onClick={() =>
navigate("/building-setup")
}
>
Continue →
</button>

</div>
</div>

);

}

export default RoomPricing;