import React, {useState} from "react";
import "./Signupcomp.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Signupcomp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [pincode, setPincode] = useState();

  // let token;
  const handlesignup = (e) =>{
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      phone:phone,
      password:password,
      address:address,
      state:state,
      city:city,
      pin:pincode,
      role:role
    }
    axios.post('https://plasticwastemanage-production.up.railway.app/register',data)
    .then((res) => {
      console.log(res.data);
      if(res.data.token){     
        localStorage.setItem("token",res.data.token);
        console.log(res.data.token)
        
        // localStorage.setItem("_id",res.data.save._id);
        navigate('/Info');
      }
    })
    .catch((err) => {
      console.log(err);
      toast.error('Enter valid details');
    })
  }


  return (
    <div className="Signupcomp">
      <div className="userlogo2">
        <AccountCircleIcon
          sx={{
            borderRadius: "100rem",
            bgcolor: "white",
            height: "5rem",
            width: "5rem",
          }}
        />
      </div>
      <div className="layer3">
        <div className="outerlayer">
        <div className="Userbox2">
          <div className="text2" id="textt">
            <span></span>
            <input onChange={(e) => {setName(e.target.value)}} value={name} placeholder="Name" />
          </div>
          <div className="text2in" id="text">
            <div className="ht">Role</div>
            {/* <div className="rradio">
              <div>
                <input onChange={(e) => {setRole(true)}}  type="radio" value="VENDER" name="ht" />
                <label htmlFor="governmenttype">Vendor</label>
              </div>
              <div>
                <input onChange={(e) => {setRole(false)}}  type="radio" value="SELLER" name="ht" />
                <label htmlFor="privatetype">Seller</label>
              </div>
            </div> */}
             <div className="text2">
            <span></span>
            <input onChange={(e) => {setRole(e.target.value)}} value={role} placeholder="Role" />
          </div>
          </div>
          <div className="text2">
            <span></span>
            <input onChange={(e) => {setAddress(e.target.value)}} value={address} placeholder="Address" />
          </div>
          <div className="text2">
            <span></span>
            <input onChange={(e) => {setCity(e.target.value)}} value={city} placeholder="City" />
          </div>
          <div className="text2">
            <span></span>
            <input onChange={(e) => {setState(e.target.value)}} value={state} placeholder="State" />
          </div>
          <div className="text2">
            <span></span>
            <input onChange={(e) => {setPhone(e.target.value)}} value={phone}  placeholder="Phone No." />
          </div>
          <div className="text2">
            <span></span>
            <input onChange={(e) => {setPincode(e.target.value)}} value={pincode} placeholder="Pin code" />
          </div>
          <div className="text2">
            <span></span>
            <input onChange={(e) => {setEmail(e.target.value)}} value={email} placeholder="Email" />
          </div>
          <div className="text2">
            <span></span>
            <input onChange={(e) => {setPassword(e.target.value)}} value={password} placeholder="Password" />
          </div>
          <div className="signbtn2">
            <button onClick={handlesignup}>Sign Up</button>
      </div>
        </div>
      
      </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signupcomp;
