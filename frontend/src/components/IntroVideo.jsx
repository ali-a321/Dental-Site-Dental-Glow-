import React from 'react'
import reception from "../images/reception.mp4"
import { useMediaQuery } from '@mui/material';
import smallImage from "../images/introPic.jpg"

function IntroVideo() {
    const isSmallScreen = useMediaQuery('(max-width: 980px)');

  return (
    <div className="video-background">
        <div className="video-overlay"></div>
        
        {isSmallScreen ? (
                <> 
        <img className='smallscreen' src={smallImage} alt='dentist'/>
        <div className="text-overlay">
        <div className='trustIntroText'>Your Trusted Toronto Dentists </div>
        <div className='superiorText'> Excellent care for all  </div>
        </div>
        </>
      ) : 
    (
    <> 
        <video autoPlay loop muted id="myVideo" >          
        <source src= {reception} type="video/mp4" />
        </video>
    <div className="text-overlay">
        <div className='trustIntroText'>Your Trusted Toronto Dentists </div>
        <div className='superiorText'> Excellent care for all  </div>
        <a href="/book-online" className='bookOnlineTitleText'>Book Online</a>
        <p className='callText'> OR CALL (012) 345-6789 </p>
    </div>
    </>
      )}
        
      
    </div>

  )
}

export default IntroVideo
