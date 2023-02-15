import React from 'react'
import homepage from '../../assets/homepage.jpg'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='homepage-slog'>
        <div>CRAFTING</div>
        <div style={{position: "absolute",left: "2rem"}}><strong>EXCEPTIONAL</strong></div>
        <div style={{position: "absolute",left: "4rem"}} className='home-slog-divlast'>LIFESTYLE</div>
      </div>
      <div className='home-img-div'>
        <img className='homepage-img' src={homepage} alt="" />
      </div>
    </div>
  )
}

export default HomePage