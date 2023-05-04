import React from 'react'
import { useEffect, useRef, useState } from 'react';
import receptionIcon from "../images/reception.jpg"
import clinicIcon from "../images/clinic.jpg"
import time from "../images/time.png"
import map from "../images/map.png"


function VisitUs() {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const windowHeight = window.innerHeight;

    const contentPosition = contentRef.current.getBoundingClientRect().top;

    if (contentPosition - windowHeight <= 0) {
      setIsContentVisible(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      const contentPosition = contentRef.current.getBoundingClientRect().top;

      if (contentPosition - windowHeight <= 0) {
        setIsContentVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
  <div className={`fifthContainer ${isContentVisible ? 'visible' : ''}`} ref={contentRef}>
    <div className='pictureContainer'> 
      <img src={receptionIcon} alt='reception' className='reception' loading="lazy"/>
      <img src={clinicIcon} alt='clinic room' className='clinic' loading="lazy"/>
    </div>
    <div className='infoContainer'>
      <div className='visitUsTitle'> Visit Us </div>
      <p> We are conveniently located in the Downtown Toronto Area. Find us on the 148th floor of the CN Tower. Convenient parking options are available. </p>
      <div className='addressContainer'> 
        <img src={map} alt='map' className='addressIcons' loading="lazy"/>
        <div className='addressInfo'> 290 Crenmer St <br/> Toronto, ON M5V 3L9 </div>
      </div>
      <div  className='addressContainer'>
        <img src={time} alt='clock' className='addressIcons' loading="lazy"/>
        <div className='operatingHrs'> Monday-Saturday: 9AM-5PM </div>
      </div>
    </div>
         
  </div>
  )
}

export default VisitUs
