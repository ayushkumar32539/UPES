import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar';
import Slider from '../../Components/Slider/Slider';
import Footer from '../../Components/Footer/Footer';
import Support from '../../Components/Support/Support';
// import logo from '../../Assets/SSlogo.png'
import Chat from '../../Components/Chat/Chat'
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handlebedavailnavigate = () => {
    navigate("/GARBAGENearby");
  }

  const handledistrictwise = () => {
    navigate('/districtwise')
  }
  return (
    <div className='Home'>
      <div className='basecover'>
      <div className='base'>

        <Navbar defaulth={'Home'}/>
  
        <div className='tagline'>
            <span>You don't need to worry about handling the gargbage because</span>
        </div>
        <div className='stickavail' onClick={handledistrictwise}>
            <span>District Wise Garbage</span>
        </div>
          <div className='logodiv'>
          {/* <img src={logo} alt="img"/> */}
          </div>
        </div>
        </div>
        <div className='options'>
          <div className='opchoice' onClick={handlebedavailnavigate}>Garbage</div>
          <div id="hospitalchoice" className='opchoice'>GARBAGE</div>
          <div className='opchoice'>GARBAGE HANDLING</div>
        </div>
        <div className='sec2'>
          <span className='hosp_head'>GARBAGE</span>

          {/* <Slider/> */}
          <div className='images'>
            <div className='hospt_img'>
            <img src='https://media.springernature.com/full/springer-cms/rest/v1/img/23611344/v1/height/320' alt="img"></img>
            <div className='combine'>
            <div className='GARBAGEtate'>
            <span className='hosp'>CLEAN EARTH</span>
  
            </div>
            </div>
            </div>
            
            <div className='hospt_img'>
            <img src='https://media.springernature.com/full/springer-cms/rest/v1/img/23611344/v1/height/320' alt="img"></img>
            <div className='combine'>
            <div className='GARBAGEtate'>
            <span className='hosp'>CLEAN EARTH</span>
            </div>
            </div>
            </div>

            <div className='hospt_img'>
            <img src='https://media.springernature.com/full/springer-cms/rest/v1/img/23611344/v1/height/320' alt="img"></img>
            <div className='combine'>
            <div className='GARBAGEtate'>
            <span className='hosp'>CLEAN EARTH</span>
            </div>
            </div>
            </div>

            <div className='hospt_img'>
            <img src='https://media.springernature.com/full/springer-cms/rest/v1/img/23611344/v1/height/320' alt="img"></img>
            <div className='combine'>
            <div className='GARBAGEtate'>
            <span className='hosp'>CLEAN EARTH</span>
  
            </div>
            </div>
            </div>

          </div>
          <Chat/>
          <Support/>
          <Footer/>
        </div>

    </div>
  )
}

export default Home