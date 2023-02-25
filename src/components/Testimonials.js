import React,{useState} from "react";
import { testimonialsData } from "../data/testimonialsData";
import './Testimonials.css';
import { motion } from "framer-motion";



function Testimonials(){
        
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length; 
    const transition={type:'spring', duration:3}
    

    return(
        <div className="testimonials" id="testimonials">
             
          <div className="blur test-blur">

          </div>
              <div className="left-t">
                <span className="testimonials-text">TESTIMONIALS</span>
                <span className="stroke-text text">WHAT THEY</span>
                <span className="about-us text">SAY ABOUT US</span>
                <motion.span
                initial={{opacity:0, x:100}}
                animate={{opacity:1, x:0}}
                exit={{opacity:0, x:-100}}
                transition={transition}
                 className="reviews">
                    {testimonialsData[selected].review}
                </motion.span>
                <span>
                <span className="name">
                    {testimonialsData[selected].name}  
                </span>
                <span className="status"> - {testimonialsData[selected].status}</span>
                </span>
            </div>
           
            <div className="right-t">
                <motion.div
                 initial={{opacity:0, x:-100}}
                 whileInView={{opacity:1, x:0}}
                 transition={transition}
                ></motion.div>
                 <motion.div
                 initial={{opacity:0, x:100}}
                 whileInView={{opacity:1, x:0}}
                 transition={transition}
                ></motion.div>
              <motion.img 
              key={selected}
              initial={{opacity:0, x:100}}
              animate={{opacity:1, x:0}}
              exit={{opacity:0, x:-100}}
              transition={transition}
              className="T-img" src={testimonialsData[selected].image} alt="" />
              <div className="arrows">
                <div className="left-arrow">
                  <img 
                  onClick={()=>{selected===0? setSelected(tLength-1) :
                     setSelected((prev)=>prev-1)}}
                  src="https://cdn-icons-png.flaticon.com/512/109/109618.png" alt="left-arrow" />
                </div>
                <div className="right-arrow">
                  <img 
                  onClick={()=>{selected===tLength-1? setSelected(0) :
                    setSelected((prev)=>prev+1)}}
                  src="https://cdn-icons-png.flaticon.com/512/109/109617.png" alt="right-arrow" />
                </div>
                
            </div>
            </div>
          
        </div>
        
    )
}
export default Testimonials;