import React from "react";
import logo from "../../assets/logo.jpg";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-l">
        <img src={logo} alt="" />
      </div>
      <div className="footer-m">
        <div>
          <h3>FOR GURGAON</h3>
          <div>
            Toll Free Number: 1800 123 6244 <br /> Email: sales@puriconstructions.com
          </div>
        </div>
        <div>
          <h3>FOR FARIDABAR</h3>
          <div>
            Toll Free Number: 1800 212 6233 <br /> Email:
            marketing@puriconstructions.com
          </div>
        </div>
      </div>
      <div className="footer-r">
        <div>
          <h3>CORPORATE REGISTERED OFFICE</h3>
          <div>
            Puri Construction Private Limited 4-7B, Ground Floor, Tolstoy House.
            15 & 17, Tolstoy Marg New Delhi - 110001
          </div>
        </div>
        <div>
          <h3>MARKETING OFFICE</h3>
          <div>
            Puri Construction Private Limited 11-12A , Ground Floor, Tolstoy
            House. 15 & 17, Tolstoy Marg New Delhi - 110001
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
