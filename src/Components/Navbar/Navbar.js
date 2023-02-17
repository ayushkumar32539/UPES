import React from 'react'
import './Navbar.css'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useNavigate } from "react-router-dom";
// import Home from '../../Pages/Home/Home';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import axios from 'axios';
// import DialogTitle from '@mui/material/DialogTitle';
const Navbar = ({defaulth}) => {
 const navigate = useNavigate();


//  const [open, setOpen] = React.useState(false);
//  const [email, setEmail] = React.useState("");
//  const [hh, setHh] = React.useState("");

//  const handleClickOpen = () => {
//    setOpen(true);
//  };

//  const handleClose = () => {
//    setOpen(false);
//  };



//  const handleOkay = () =>{
//   setHh("yup");
//   handleClose();

//  }



//  const handleEmailSubmit =() =>{
//   const data = {
//     "email" : email
//   }
//   axios.post('https://sih-23.herokuapp.com/bad/patient/bookingbads',data)
//   .then((res) => {
//     console.log(res.data);
//     if(res.data){
//       setHh("yup");
//       handleClose();

//     }
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
//  }


  return (
    <div className='Navbar'>
         <div className='header'>
        <div className='logo'>
        </div>
        <div className='head'>
          <button className={defaulth === 'Home'? 'selectedpgchoice' : 'onlychoice'} onClick={(e) => {navigate('/');}} value="Home">Home</button>
          <button className={defaulth === 'Garbage Nearby'? 'selectedpgchoice' : 'onlychoice'} onClick={(e) => {navigate('/garbagenearby');}} value="Garbage Nearby">Garbage Availability</button>
          <button className={defaulth === 'UserLogin'? 'selectedpgchoice' : 'onlychoice'} onClick={(e) => {navigate('/sign');}} value="Login">SignIn/SignUp</button>
          <div className='location'>
          {/* <span >Emergency</span> */}
          {/* <AddBoxIcon sx={{color:"white"}}/> */}






          </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar