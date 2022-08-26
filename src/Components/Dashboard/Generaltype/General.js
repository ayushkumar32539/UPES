import React, { useEffect, useState } from 'react';
import './General.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';



function createData(serialno, name, phone, aadhar, bedId) {
    return { serialno, name, phone, aadhar, bedId};
  }
const General = () => {
  const[dash_list, setDash_list] = useState("");
 useEffect(() => {

  const data = {
    "cookie_token": localStorage.getItem("token")
  }
  axios.put("https://sih-23.herokuapp.com/bad/hospital/bookingbads/General",data)
  .then((res) => {
    // console.log(res.data);
    setDash_list(res.data);
  })
  .catch((err) => {
    console.log(err);
  })
})

const deletecell = (val) =>{
// console.log(`https://sih-23.herokuapp.com/bad/booking/${val}`);
 console.log(val);
if(val){
  axios.delete(`https://sih-23.herokuapp.com/bad/booking/${val}`)
  .then((res)=>{
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  })
}

}

  return (
    <div className='General'>
        <div className='outtable'>
        <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} className='dasshtab' aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.no.</TableCell>
            <TableCell align="right">Patient Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Bed ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {dash_list && dash_list.map((val, i) => (
 <TableRow
 key={i}
 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
>
 <TableCell component="th" scope="row">
 {i+1}
 </TableCell>
 <TableCell align="right">{val.patientName}</TableCell>
 <TableCell align="right">{val.age}</TableCell>
 <TableCell align="right">{val.email}</TableCell>
 <TableCell align="right">{val.hospitalId}</TableCell>
 <TableCell className='ddlete' onClick={() => deletecell(val.hospitalId)} align="right">{<DeleteSweepIcon/>}</TableCell>
</TableRow>

))}


        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  )
}

export default General