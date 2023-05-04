import React from 'react'
import { useEffect, useRef, useState } from 'react';
import NavBar from '../components/NavBar';
import checkmark from '../images/checkmark.png'
import mainpic from '../images/mainpic.jpg'
import pic1 from '../images/pic1.jpg'
import pic2 from '../images/pic2.jpg'
import pic3 from '../images/pic3.jpg'
import insuranceIcon from "../images/insuranceIcon.png"
import abstract from "../images/abstract.jpg"
import IntroVideo from '../components/IntroVideo';
import Comments from '../components/Comments';
import VisitUs from '../components/VisitUs'
import Maps from '../components/Maps';
import Footer from '../components/Footer';


function Home() {
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
  <div>
    <NavBar/> 
    <div className='zeroBody'> 
    <IntroVideo/>
    
    </div>
    <div className='firstBody'>
      <div className= "firstBodyTextContainer">
        <div className= "firstBodyText">
          <div className="firstBodyTitle">  Dentistry Done Correct </div>
          <div className='forAll'> We provide dental care for patients of all ages with: </div>
         
          <ul className='checkText'> 
          <li>
          <img className="checkLogo" src = {checkmark} alt ="light orange check mark" loading="lazy" /> 
           <span> Comfortable environment </span>
           </li>
         
          <li>
          <img className="checkLogo" src = {checkmark} alt ="light orange check mark" loading="lazy" /> 
           <span> Personalized care </span> 
           </li> 
         
          <li>
          <img className="checkLogo" src = {checkmark} alt ="light orange check mark" loading="lazy"/> 
          <span> Emergency care </span>
          </li>
         
          <li>
          <img className="checkLogo" src = {checkmark} alt ="light orange check mark" loading="lazy"/> 
          <span> Transparent Pricing </span>
          </li>
          </ul>
          <p className= "quoteText" > <em> "We believe in providing transparent pricing 
          and standing behind our work"  </em>
          </p>
      </div>
      <div> 
        <img src={mainpic} alt='dentist consulting patient' className="mainPic"></img> 
      </div>
        </div>
    </div>
    <div className='secondBody'>
      <Comments/> 

    </div>
    
    <div className="thirdBody">
      <div>
        <div className='thirdBodyTitle'> Complete treatment options, all in <br/> one location. </div>
        <div className="subHeadingContainer"> 
          <div  className='subHeading'> 
            <div> <img src={pic1} alt ="dentist talking to patient" className='threeImages' loading="lazy"/>  </div>
            <div className='subHeadingTitle'> General </div>
            <p className='paraText'> More than the basics. Expect comprehensive care that goes beyond cleanings, fillings, and x-rays. </p>
            <a className='exploreTag'> Explore further </a>
          </div>
          <div  className='subHeading'> 
            <div> <img src={pic3} alt ="smiling patient with great white teeth" className='threeImages'id="smilingPic" loading="lazy"/>  </div>
            <div className='subHeadingTitle'> Cosmetic </div>
            <p className='paraText'> Uncover your smile's potential. From Invisalign to veneers, we have everything you need to achieve a stunning smile. </p>
            <a className='exploreTag'> Explore further </a>
          </div>
          <div  className='subHeading'> 
            <div> <img src={pic2} alt ="dentist talking to patient" className='threeImages' loading="lazy" />  </div>
            <div className='subHeadingTitle'> Surgical </div>
            <p className='paraText'> Restorative solutions that make a difference. We use advanced techniques to repair and/or replace teeth. </p>
            <a className='exploreTag'> Explore further </a>
          </div>
        </div>
      </div>
    </div>

    <div className='fourthBody'> 
      <div className={`fourthBodyTextContainer ${isContentVisible ? 'visible' : ''}`} ref={contentRef}> 
        <div className='transBlock'> 
          <p className='trustT'> TRANSPARENT PRICING </p>
          <div className='trustTitle'>Trustworthiness </div>
          <p className='trustText'> At our dental practice, we're dedicated to making dental care accessible to everyone. That's why we provide transparent pricing and clear estimates. We believe in keeping your oral health in top shape, which is why we offer routine checkups every 6 months. And if there's anything that needs fixing, you can trust us to take care of it. </p>
        </div>
        <div className='insurBlock'> 
          <h3 className='insurTitle'> Insurance </h3>
          <p className='insurText'> Our dental clinic cooperates with Blue Cross Dental in the Greater Toronto Area, and we accept all other insurance providers as well. We will work closely with you to help you understand your dental benefits and how they can help cover the cost of your treatment. </p>
          <img src= {insuranceIcon} alt='depiction of insurance form' className='insuranceIcon' loading="lazy"/>
        </div>

      </div>
    </div>
    
    <div className='fifthBody'> 
      <VisitUs/>

    </div>

    <div className='sixBody'>
      <div className='goMap'> 
        <Maps />
      </div> 

    </div>
    <div className='sevenBody'>
      <div className='imageC'> 
        <img src={abstract} alt='Abstract gradient background with shades of blue, green and purple' className='abstractImg'/>
        <div className="actionTitle"> Book your visit online </div>
        <div className="bookOnlineSub"> Book Online </div>
      </div>
    </div>
    <div className='eightBody'>
      <Footer/>
    </div>
  
   </div>
  )
}

export default Home