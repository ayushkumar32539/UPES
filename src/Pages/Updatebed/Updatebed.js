import React  from "react";
import "../Info/Info.css";
import TextField from "@mui/material/TextField";
import HotelIcon from "@mui/icons-material/Hotel";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import axios from "axios";
const Updatebed = () => {
  const navigate = useNavigate(); 
  const handleupdatesubmit= (e) => {
    e.preventDefault();
    navigate('/Dashboard');
  
  }

  return (
    <div className='Updatebed Info'>
      <div className="center">
        <div className="incenter">
          <div className="layer1">
            <div className="signIn_logo">
            </div>
            <span className="welcome">Welcomes You</span>
          </div>
          <div className="layer2_1">
            <span>Provide Details</span>
          </div>
          <div className="layer3_1">
            <div className="input2">
              <div className="ininput2">
                <span className="bed_type">Garbage Type</span>
                <div className="divisionbedtype">
                  <div className="general">
                    {/* <span className="txt">Origin of Waste</span> */}
                    <div className="generalin">
                      {/* <HotelIcon sx={{ height: "5vh", width: "3vw" }} /> */}
                      {/* <TextField
                        id="outlined-basic"
                        sx={{ width: "30vw" }}
                        label="Origin of waste"
                        size="small"
                        variant="outlined"
                        type='text'
                      /> */}

<FormControl fullWidth>

<InputLabel id="demo-simple-select-label">Origin of Waste</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={originofwaste}
    label="Types of waste"
    // onChange={handleChange}
    >
    {/* <MenuItem value={Industrial}>Industrial</MenuItem> */}
    {/* <MenuItem value={Household}>Household</MenuItem> */}
    {/* <MenuItem value={Market}>Market</MenuItem> */}
    {/* <MenuItem value={Office}>Office</MenuItem> */}

  </Select>
    </FormControl>
                    </div>
                    <div className="generalin">
                      <TextField
                        id="outlined-basic"
                        sx={{ width: "30vw" }}
                        label="Amount"
                        size="small"
                        variant="outlined"
                        type='number'
                      />
                    </div>
                    
                  </div>
                  <div className="special">
                    <div className="generalin">
                      {/* <HotelIcon sx={{ height: "5vh", width: "3vw" }} /> */}
                      {/* <TextField
                        id="outlined-basic"
                        sx={{ width: "30vw" }}
                        label="Types of waste"
                        size="small"
                        variant="outlined"
                        type='number'
               
                      /> */}
<FormControl fullWidth>

<InputLabel id="demo-simple-select-label">Types of Waste</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={typesofwaste}
    label="Types of waste"
    // onChange={handleChange}
    >
    {/* <MenuItem value={Organic}>Organic</MenuItem> */}
    {/* <MenuItem value={Plastic}>Plastic</MenuItem> */}
    {/* <MenuItem value={Paper}>Paper</MenuItem> */}
    {/* <MenuItem value={Metal}>Metal</MenuItem> */}

  </Select>
    </FormControl>
                    </div>
                    <div className="generalin">
                      <TextField
                        id="outlined-basic"
                        sx={{ width: "30vw" }}
                        label="Quantity in Kg"
                        size="small"
                        variant="outlined"
                        type='number'
                    
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="input3">
              <div className="ininput3">
             

              </div>            
            </div>
            <div className="signbtn">
                <button onClick={handleupdatesubmit}>Submit</button>
            </div>        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updatebed