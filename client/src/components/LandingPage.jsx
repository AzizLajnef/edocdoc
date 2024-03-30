import React from 'react'
import Switch from '@mui/material/Switch';
import { color } from '@mui/system';
// import LandingPagePng from '../img/LandingPage.png.png'
const label = { inputProps: { 'aria-label': 'Switch demo' } };
function LandingPage() {
  return (
    <div>
       <div className="">
      <h1>Providing Quality Healthcare for a Brighter and Healthy Future</h1>
      <p>At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry</p>
    </div>
    <div className="">
        {/* <img src="LandingPagePng" alt="" /> */}
    </div>
    <div className="search" style={{background:'white'}}>
        <h3>Find A Doctor </h3>
        <input type="text" name='Specialty'/>
        <input type="text" name='Name'/>
        <Switch {...label} defaultChecked />
    </div>
    </div>
  )
}

export default LandingPage
