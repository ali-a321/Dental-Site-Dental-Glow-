import React from 'react'
import fb from "../images/fb.png"
import ig from "../images/ig.png"


export default function Footer() {
  

    return (
    <div className='footerContainer'>
        <div> 
            <h3>  Social </h3> 
            <a href="https://www.facebook.com" target="_blank"> 
            <img src={fb} alt='facebook logo' className='socialLogo'/>
            </a>
            <a href="https://www.instagram.com" target="_blank"> 
            <img src={ig} alt='instagram logo'className='socialLogo'/>
            </a>

        </div>
        <div> <h3>  Services </h3> 
            <div> General <br/>
                Services <br/>
                Cosmetic 
             </div>
        </div>
        <div> <h3>  Contact Us </h3> 
            <div> 
                <div> 290 Crenmer St <br/> Toronto, ON M5V 3L9</div>
                <div> (012) 345-6789 </div>
            </div>
        </div>
    </div>
  )
}
