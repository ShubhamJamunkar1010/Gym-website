import React from "react";
import "./Hero.css";
import {motion} from 'framer-motion'
import CountUp from 'react-countup';
import { Link } from "react-scroll";


function Hero() {

  const transition={type:'spring', duration:3}
  return (

    //right side
  
    <div className="hero" id="home">
      <div className="blur hero-blur">
      </div>
      <div className="right-side">
        <div className="main">
          <div className="header">
            <div className="logo">
              <img
                src="https://www.fitclub.net/sites/ob-143.app.sitewright.io/files/2020-07/FCLogoColor%203.png"
                alt="logo"
              />
            </div>

       
            <div>
              <ul className="nav-items-list">

                <li>
                <Link className="nav-items" spy={true} smooth={true} to="home" >Home</Link>
                  </li>

                <li>
                <Link className="nav-items" spy={true} smooth={true} to="programs" >Programs</Link>
                </li>

                <li>
                <Link  className="nav-items" offset={-100} spy={true} smooth={true} to="reasons" >Why us</Link>
                  </li>

                <li>
                <Link className="nav-items" offset={-100} spy={true} smooth={true} to="plans" >Plans</Link>
                  </li>

                <li>
                <Link className="nav-items" offset={-100} spy={true} smooth={true} to="testimonials" >Testimonials</Link>
                </li>

              </ul>
            </div>
          </div>
        </div>

        <div className="section-1">
  
            <motion.div
            initial={{left:'238px'}}
            whileInView={{left:'8px'}}
            transition={{...transition, type:'tween'}}
            >
            </motion.div>
          <span className="sec1">THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>

        <div className="section-2">
          <div>
            <span className="stroke-text">SHAPE </span>
            <span> YOUR</span>
          </div>
          <div>
            <span>IDEAL BODY</span>
          </div>
        </div>

        <div className="section-3">
          <span>
            In here we will help you to shape and build your ideal body and live
            up your life to fullest
          </span>
        </div>

        <div className="section-4">
          <div>
            <span>
            <CountUp end={100} start={70} prefix="+" duration={3} />
            </span>
            <span>expert coaches</span>
          </div>

          <div>
            <span>
            <CountUp end={978} start={900} prefix="+" duration={4} />
            </span>
            <span>members joined</span>
          </div>

          <div>
            <span>
            <CountUp end={50} start={30} prefix="+" duration={2} />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="buttons">
          <button className="getStartedBtn">Get Started</button>
          <button className="learnMoreBtn">Learn More</button>
        </div>
      </div>

      {/* left side */}
      <div className="left-side">
        <div className="join-btn">
          <button>Join Now</button>
        </div>
        <motion.div
        initial={{right:'-20px'}}
        whileInView={{right:'70px'}}
        transition={transition}
        className="heart-rate">
          <img className="heart-img" src="https://t3.ftcdn.net/jpg/03/20/35/28/240_F_320352822_Du18cSR0okuxVfYKgQIYYU794iqjQRAU.jpg" alt="" />
            <span className="rate">Heart Rate</span>
            <span className="bpm">116 bpm</span>
        </motion.div>
        <div >
          <img  className="hero-img"  src="https://fitclub-1my.pages.dev/static/media/hero_image.e19ac0c6b1009c7280f5.png" alt="" />
           <motion.img 
           initial={{right:'140px'}}
           whileInView={{right:'220px'}}
           transition={transition}
           className="heroimg-strips"
           src="https://fitclub-1my.pages.dev/static/media/hero_image_back.9f54bfba33048f4ca688.png" alt="" />
        </div>

        <motion.div className="calories-burn"
          initial={{right:'280px'}}
          whileInView={{right:'340px'}}
          transition={transition}
           >
          <div className="graph">
            <img src="https://img.lovepik.com/free-png/20220125/lovepik-data-graph-png-image_401707380_wh300.png" alt="" />
          </div>
          <div className="calories">
          <div>
            <span>Calories <br /> burned </span>
          </div>
          <div className="kcal">
            <span>220 <br />kcal</span>
            
          </div>
        </div>
        </motion.div>
      </div>
    </div>
  );
}
export default Hero;
