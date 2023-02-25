import React from "react";
import './Reasons.css'


function Reasons(){
   return(
      <div className="Reasons" id="reasons">
          
         <div className="left-r">
             <img src="https://fitclub-1my.pages.dev/static/media/image2.82da8b2725df896d8a8e.png" alt="" />
         </div>

         <div className="right-r">

            <span className="some-reasons">SOME REASONS</span>
            <div className="why">
               <span className="stroke-text">WHY </span>
               <span>CHOOSE US ?</span>
            </div>

          <div className="icon-details">
          <img className="icons" src="https://cdn-icons-png.flaticon.com/512/872/872230.png" alt="" />
          <span className="details">OVER 140+ EXPERT COACHS</span>
          </div>

          <div className="icon-details">
          <img className="icons" src="https://cdn-icons-png.flaticon.com/512/872/872230.png" alt="" />
          <span className="details">TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>

          <div className="icon-details">
          <img className="icons" src="https://cdn-icons-png.flaticon.com/512/872/872230.png" alt="" />
          <span className="details">1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>

          <div className="icon-details">
          <img className="icons" src="https://cdn-icons-png.flaticon.com/512/872/872230.png" alt="" />
          <span className="details">RELIABLE PARTNERS</span>
          </div>

          <div className="our-partners">
            <span>OUR PARTNERS</span>
          </div>

          <div className="partners-logo">
            <img src="https://t4.ftcdn.net/jpg/03/87/98/81/240_F_387988173_dJONCRyL6UrirOYs6ufXsUuutcSvR6nu.jpg" alt="" />
          </div>
          
         </div>
      </div>
   )
}

export default Reasons;