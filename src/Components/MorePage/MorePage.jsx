import React from 'react'
import morepage from '../../assets/morepage.jpg'
import './MorePage.css'

const MorePage = () => {
  return (
    <div className='morepage'>
        <div className='morepage-l'>
            <h2>THE ARAVALLIS</h2>
            <div>Sector 61, Gurugram</div>
            <hr />
            <div>10 min from horizon centre</div>
            <hr />
            <div>High end specifications</div>
            <hr />
            <div>Luxury club house</div>
        </div>
        <div className='morepage-r'>
            <div className='morepage-r-head'>New Launch</div>
            <div className='morepage-r-img-div'>
                <img className='more-img' src={morepage} alt="" />
            </div>
            <button className='knowmore-btn'>KNOW MORE</button>
        </div>
    </div>
  )
}

export default MorePage