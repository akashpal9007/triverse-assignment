import React from 'react'
import homepage from '../../assets/homepage.jpg'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='homepage-slog'>
        <div style={{fontSize:'1.5rem'}}>CRAFTING</div>
        <div style={{fontSize:'1.5rem',position: "absolute",left: "2rem"}}><strong>EXCEPTIONAL</strong></div>
        <div style={{fontSize:'1.5rem',position: "absolute",left: "4rem", top:"4rem"}}>LIFESTYLE</div>
      </div>
      <div className='home-img-div'>
        <img className='homepage-img' src={homepage} alt="" />
      </div>
    </div>
  )
}

export default HomePage