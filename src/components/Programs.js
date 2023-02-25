import React from "react";
import "./Programs.css"
import { programsData } from "../data/programsData";

function Programs(){

   return (
        
        <div className="programs" id="programs">
            <div className="blur programs-blur">
            </div>
            <div className="programs-heading">
                    <span class="stroke-text">
                        Explore our
                    </span>
                    <span>
                         programs
                    </span>
                    <span class="stroke-text">
                        to shape you
                    </span>
            </div>

            <div className="programs-categories">
                {programsData.map((program)=>(
                  <div className="categories">
                    <span className="program-image">{program.image}</span>
                    <span className="heading">{program.heading}</span>
                    <span className="program-details">{program.details}</span>
                    <div><button>Join Now</button></div>
                  </div>
                ))}
            </div>
        </div>
    )
}
    

export default Programs;