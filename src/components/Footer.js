import React from "react";
import './Footer.css'

const Footer =()=>{
  return(
    <div className="footer">
      <div className="left-f">
        <div>
            <span>
            <span className="stroke-textt">WORKING</span>
            <span> HOURS</span>
            </span>
           
        </div>
        <div>
            <span>Monday-Friday 5:00 AM-12.00 AM</span>
        </div>
        <div>
            <span>Sunday-Saturday 8:00 AM-10.00 PM</span>
        </div>
        
        <div className="social-icons">
            <img src="https://cdn.iconscout.com/icon/free/png-128/instagram-1946323-1646407.png" alt="" />
            <img src="https://cdn.iconscout.com/icon/free/png-128/facebook-75-189796.png" alt="" />
            <img src="https://cdn.iconscout.com/icon/free/png-128/youtube-268-721990.png" alt="" />
            <img src="https://cdn.iconscout.com/icon/free/png-128/twitter-53-189787.png" alt="" />
        </div>
      </div>
      <div className="right-f">
         <div className="address">
            <span>ADDRESS</span>
            <div><span>5th Floor, SJR Primus Elite,</span></div>
            <div><span>next to Siddam Setty Complex,</span></div>
            <div><span> Koramangala, Bengaluru, </span></div>
            <div><span>Karnataka 560034</span></div>
         </div>
         <div className="logo-f">
            <img src="https://www.fitclub.net/sites/ob-143.app.sitewright.io/files/2020-07/FCLogoColor%203.png" alt="" />
         </div>
      </div>
    </div>
  )
}

export default Footer;