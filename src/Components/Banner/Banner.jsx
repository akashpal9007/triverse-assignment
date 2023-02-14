import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <>
    <div className='banner'>
        <div className='banner-text'><span style={{color:"#ac9955", fontSize:"3rem"}}>50</span><br /> YEARS LEGACY</div>
        <div className='banner-text'><span style={{color:"#ac9955", fontSize:"3rem"}}>2150</span><br /> UNITS DELIVERED IN THE LAST 36 MONTHS</div>
        <div className='banner-text'><span style={{color:"#ac9955", fontSize:"3rem"}}>2700</span><br /> UPCOMING UNITS COMING UP FOR DELIVERY IN THE NEXT 24 MONTHS</div>
    </div>
    <div className='callback'>
        <div>REQUEST A CALL BACK</div>
        <div>
            <input type="text" placeholder='NAME*'/>
            <input type="text" placeholder='MOBILE*'/>
            <input type="text" placeholder='EMAIL*'/>
        </div>
        <button className='btn-submit'>SUBMIT</button>
        <hr />
    </div>
    </>
  )
}

export default Banner