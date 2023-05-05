import React, { useState } from 'react';
import menu from "../images/menu.png"

function NavBar() {
  const [showModal, setShowModal] = useState(false);

  const handleMenuClick = () => {
    setShowModal(!showModal)
  };

  return (
    <>
    <div className='navigationBarContainer' >
        
        <div className='title'> DENTAL GLOW </div>
        
        <div className='subHeadingContainer'> 
        <div className='deadLinks'>  <a> About  </a> </div>
        <div className='deadLinks'>  <a> Services  </a> </div>
        <div className='deadLinks'>  <a> New Patients  </a>  </div>
        <div className='bookOnlineTitle'> <a href='/book-online'> Book Online </a>   </div>
        <img src={menu} alt='menu tab' className='menuTab' onClick={handleMenuClick} />
    
        </div>
    </div>
      {showModal && (
        <div className='modal'>
          <div className='modalContent'>
            <div className='modalBody'>
              <div className='deadLinksMenu'> <a> About </a> </div>
              <div className='deadLinksMenu'> <a> Services </a> </div>
              <div className='deadLinksMenu'> <a> New Patients </a> </div>
              <div className='bookOnlineTitleMobile'> <a href='/book-online'> Book Online </a> </div>
            </div>
          </div>
        </div>
      )}
     </>
  )
}

export default NavBar