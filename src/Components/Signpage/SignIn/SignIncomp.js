import React,{useState} from 'react'
import "./SignIncomp.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const SignIncomp = () => {
  const navigate = useNavigate();
  const [userId,setUserId] = useState("");
  const [password,setPassword] = useState("");
  const [role,setRole] = useState("");
  // let token;
  const handlesignin = (e) => {
    e.preventDefault();
    const data = {
      email:userId,
      password:password,
      role:role
    }
    axios.post('https://plasticwastemanage-production.up.railway.app/login',data)
    .then((res) => {
      console.log(res.data.data.token)
        if(res.data.data.token){
          // localStorage.getItem("token",res.data.token);
          
          // if(res.data.token)
          {navigate('/Dashboard');}
        //   // localStorage.setItem("_id",res.data.hosId);
        } 
      
    })
    .catch((err) => {
      console.log(err);
      toast.error('Enter correct details')
    })

  }
  return (
    <div className='SignIncomp'>
        <div className="userlogo">
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
            <div className="Userbox">
              <div className="text1" id="text">
                <span></span>
                <input onChange={(e) => {setUserId(e.target.value)}} value={userId} placeholder="Email" />
              </div>
              <div className="text1" id="text">
                <span></span>
                <input onChange={(e) => {setRole(e.target.value)}} value={role} placeholder="Role" />
              </div>
              <div className="text1">
                <span></span>
                <input onChange={(e) => {setPassword(e.target.value)}} value={password} placeholder="Password" />
              </div>
              <div className="signbtn">
                <button onClick={handlesignin}>Sign In</button>
              </div>
            </div>
          </div>
          <ToastContainer/>
    </div>
  )
}

export default SignIncomp