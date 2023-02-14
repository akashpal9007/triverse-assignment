import React from 'react'
import discover from '../../assets/discover.jpg'
import './Discover.css'

const Discover = () => {
  return (
    <div className='discover'>
        <div className='discover-l'>
            <h3>
                CRAFTING EXCEPTIONAL LIFESTYLE ACROSS DELHI NCR
            </h3>
            <div>
                Every project has a distinctive Puri design language which has become synonymous with refined living in Delhi NCR. South-East Asian inspired landscaping and ultra luxurious watch clubhouses are some of the things which can be seen in every project of Puri Constructions
            </div>
            <button className='knowmore-btn'>DISCOVER MORE</button>
        </div>
        <div className='discover-r'>
            <img src={discover} alt="" />
        </div>
    </div>
  )
}

export default Discover