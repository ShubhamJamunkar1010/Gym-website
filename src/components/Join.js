import React, { useRef } from "react";
import './Join.css'
import emailjs from 'emailjs-com';

const Join=()=>{
const form = useRef()

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_urb5f8e', 'template_v65qbij', form.current, 'Bqx1P80RXB21M6t5G')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

return(
<div className="join" id="join">
    <div className="blur join-blur">

    </div>
    <div className="left-j">
       <div>
        <span className="stroke-text">READY TO</span>
        <span> LEVEL UP</span>
       </div>
       <div className="Body">
        <span>YOUR BODY</span>
        <span className="stroke-text"> WITH US?</span>
       </div>
    </div>
    <div className="right-j">
        <form onSubmit={sendEmail} ref={form} className="email-container" >
            <input className="input-text" type="email" name="user-email" placeholder="enter your email address"/>
            <button className="btn-j">Join now</button>
        </form>
    </div>
</div>
)
}
export default Join;