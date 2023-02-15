import React from 'react'
import homepage from '../../assets/homepage.jpg'
import './HomePage.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='homepage-slog'>
        <div>CRAFTING</div>
        <div style={{position: "absolute",left: "2rem"}}><strong>EXCEPTIONAL</strong></div>
        <div style={{position: "absolute",left: "4rem"}} className='home-slog-divlast'>LIFESTYLE</div>
      </div>
      <div className='home-img-div'>
        {/* <img className='homepage-img' src={homepage} alt="" /> */}
        <Carousel autoPlay infiniteLoop showThumbs={false}>
                <div>
                    <img src={homepage} />
                </div>
                <div>
                    <img src={homepage} />
                </div>
                <div>
                    <img src={homepage} />
                </div>
            </Carousel>
      </div>
    </div>
  )
}

export default HomePage