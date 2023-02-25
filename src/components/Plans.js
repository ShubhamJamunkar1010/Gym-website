import React from "react";
import { plansData } from "../data/plansData";
import './Plans.css'


function Plans(){
    return (
    <div className="plans-container" id="plans">
       
      <div className="blur plans-blur">

      </div>
        <div className="plans-text">
            <div><span className="stroke-text text">READY TO START </span></div>
            <div><span className="text"> YOUR JOURNEY </span></div>
            <div><span className="stroke-text text"> NOW WITH US</span></div>
        </div>

        <div className="plans">
                {plansData.map((plan, i)=>(
                  <div className="plan" key={i}>
                    <span className="icon">{plan.icon}</span> 
                    <span className="plan-name">{plan.name}</span>
                    <span className="plan-price">${plan.price}</span>

                  <div className="features">
                       
                       {plan.features.map((feature, i)=>(
                           <div className="feature">
                            <img className="tick" src="https://cdn-icons-png.flaticon.com/512/872/872230.png" alt="" />
                            <span key={i}>{feature}</span>
                           </div>
                       ))}
                    </div>
                    
                    <div className="benefits">
                       <span>See more benefits </span>
                    </div>
                    <button className="btn">Join Now</button>
                        
                  </div>
                ))}
            </div>
    </div>
    )
}

export default Plans;