import React, { useEffect, useState } from "react";
import "./sellerlist.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import Button from '@mui/material/Button';
import Button from '@mui/material/Button';
// import { width } from "@mui/system";
const Sellerlist = ({ email, wasteid, name, mobilenum, city }) => {
  const navigate = useNavigate();
  const [waste_avail, setwaste_avail] = useState("");
  const [disable, setDisable] = useState("");


  useEffect(() => {
    if (wasteid) {
      const data = {
        Id: wasteid,
      };
      axios
        .post("https://sih-23.herokuapp.com/hospitalbyid", data)
        .then((res) => {
          setwaste_avail(res.data);
          if((res.data.wasteData.plasticType.availbility + res.data.wasteData.otherType.availbility) <= 0){
            setDisable('yes');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  return (
    <div className="hrline">
    <div className="Hosplist">
      <div className="inHosplist">
        <div className="hosplistimg">
<<<<<<< HEAD:src/Components/hosplist/Hosplist.js
          <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/5585/production/_118539812_067369333.jpg" alt="img"></img>
=======
          <img src="https://images.thequint.com/thequint%2F2018-08%2F79e4c234-cbb9-4b1e-bef1-cfda5fa80289%2FIMG_5379.JPG?auto=format%2Ccompress&fmt=webp&width=720" alt="img"></img>
>>>>>>> ecd990ba968c917df8f4fb55a507aeb81f0436f9:src/Components/sellerlist/Sellerlist.js
        </div>
        <div className="hosplisttxt">
          <div className="hosplisttitle">
            <span key={name}>{name}</span>
          </div>
          <div className="shorttxt">
            {/* <div className='line'>
                    <span>Contact No:</span>
                    <span key={mobilenum} className='bluetxt'>{mobilenum}</span>
                </div> */}

            <div className="line">
              <span>Email:</span>
              <span key={email} className="bluetxt">
                {email}
              </span>
            </div>

            <div className="line">
              <span>Contact No:</span>
              <span key={mobilenum} className="bluetxt">
                {mobilenum}
              </span>
            </div>
            <div className="line">
              <span>City : </span>
              <span key={city} className="bluetxt">
                {city}
              </span>
            </div>
            <div className="line">
              <span>Quantity : </span>
              <span key={mobilenum} className="bluetxt">
                {mobilenum}
              </span>
            </div>

            <div className="line">
<<<<<<< HEAD:src/Components/hosplist/Hosplist.js
              <span>Garbage Available:</span>
              {beds_avail && (
=======
              <span>Amount : </span>
              {waste_avail && (
>>>>>>> ecd990ba968c917df8f4fb55a507aeb81f0436f9:src/Components/sellerlist/Sellerlist.js
                <span className="bluetxt">
                  {waste_avail.wasteData.plasticType.availbility}(plastic) +{" "}
                  {waste_avail.wasteData.otherType.availbility}(other)
                </span>
              )}{" "}
            </div>
          </div>
        </div>
        <div className="moreinfo">

          <span>

                 {disable === '' && <Button  color="success"sx={{width:"10rem"}} variant="contained"  onClick={(e) => {
              e.preventDefault();
<<<<<<< HEAD:src/Components/hosplist/Hosplist.js
              navigate("/bedavailability", { state: { hospid } });
            }} >Checkout</Button>}
                 {disable === 'yes' && <Button disabled  color="success"sx={{width:"10rem"}} variant="contained">Checkout</Button>}
=======
              navigate("/bedavailability", { state: { wasteid } });
            }} >Confirm the purchase</Button>}
                 {disable === 'yes' && <Button disabled  color="success"sx={{width:"10rem"}} variant="contained">Confirm the purchase</Button>}
>>>>>>> ecd990ba968c917df8f4fb55a507aeb81f0436f9:src/Components/sellerlist/Sellerlist.js

          </span>
        </div>
      </div>
    </div>
    <div>

    </div>
      <hr style={{width:"75vw", height:"2px",borderwidth:"0",color:"gray",backgroundColor:"gray"}}/>
</div>
  );
};

export default Sellerlist;
