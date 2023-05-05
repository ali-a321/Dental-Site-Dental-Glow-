import React from 'react'
import { useState } from 'react';
import  axios  from 'axios'
import Maps from '../components/Maps'
import Footer from '../components/Footer'
import menu from "../images/menu.png"


function BookOnline() {
  
  const [patientNameData, setpatientNameData] = useState({patientName: "",});
  const [patientPhoneData, setpatientPhoneData] = useState({patientPhone: "",});
  const [patientEmailData, setpatientEmailData] = useState({patientEmail:"",});
  const [messageData, setmessageData] = useState({message: "",});
  const [showForm, setshowForm] = useState(true);
  
  const {patientName} = patientNameData
  const {patientPhone} = patientPhoneData
  const {patientEmail} = patientEmailData
  const {message} = messageData
  

  const onSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/dentalglow/appointment', { patientName, patientPhone, patientEmail, message })
    .then(res=>{
      console.log(res.data);
    })
    setpatientNameData({ patientName: '', })
    setpatientPhoneData({ patientPhone: '', })
    setpatientEmailData({ patientEmail: '', })
    setmessageData({ message: '', })
    setshowForm(false)
    
  }   
  const onChangePname = (e) => {
    setpatientNameData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }) )
  }
  const onChangepatientPhone = (e) => {
    setpatientPhoneData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }) )
  }
  const onChangepatientEmail = (e) => {
    setpatientEmailData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }) )
  }
  const onChangeMessage = (e) => {
    setmessageData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }) )
  }
  const [showModal, setShowModal] = useState(false);

  const handleMenuClick = () => {
    setShowModal(!showModal)
  };

  return (
    <div>
      <div className='navigationBarContainer' >
        
        <div className='title'><a href='/'>  DENTAL GLOW </a> </div>
        
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
      <div className='bookContainer'>
      <div className='form-container'>
        {showForm ? ( <> 
        <div className='sendMsg'> Send a Message</div>
        <section className="form">
            <form onSubmit={onSubmit}> 
            <div className="form-group">
              
              <div className="form-group">
                  <input type="text" className="form-control" id="patientName" 
                  name="patientName" 
                  required
                  value ={patientName}
                  onChange={onChangePname}
                  placeholder= "Full name" 
                  autoComplete="off"
                  />
              </div>
              <div className="form-group">
                  <input type="number" className="form-control" id="patientPhone" 
                  name="patientPhone" 
                  maxLength={10}
                  max={9999999999}
                  required
                  value = {patientPhone}
                  onChange={onChangepatientPhone}
                  placeholder= "Phone Number" 
                  autoComplete="off"

                 />
              </div>    
              <div className="form-group">
                  <input type="email" className="form-control" id="patientEmail" 
                  name="patientEmail" 
                  required
                  value = {patientEmail}
                  onChange={onChangepatientEmail}
                  placeholder= "Email address" 
                  autoComplete="off"

                 />
              </div>        
              <div className="form-group">
              <textarea className="form-control message-input" id="message" 
                name="message" 
                required
                value={message}
                onChange={onChangeMessage}
                placeholder="Message" 
                autoComplete="off"
              />
              </div>        
            </div>
            <div className="form-group">
              <button className="startBtn" type="submit" >Submit</button>
            </div>
            </form>
          </section>
          </>)
          : <div className='thankyou'> Thank you for reaching out to us. We appreciate your message and will respond to you as soon as possible within the next 24 hours. </div>  }
          <div className="contact-info__item">
          <div className="contact-info__title">Give Us a Call</div>
          <div className="contact-info__phone">Phone: (012) 345-6789</div>
        </div>
        <div className="contact-info__item">
          <div className="contact-info__title">Location</div>
          <div className="contact-info__address">290 Crenmer St<br/>Toronto, ON M5V 3L9</div>
          <Maps/>
        </div>
      </div>
      </div>
     
      <div className='eightBody'>
        <Footer/>
      </div>

    </div>
  )
}

export default BookOnline