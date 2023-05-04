import React from 'react'
import { useEffect, useRef, useState } from 'react';
import stars from '../images/rating.png'
import quote from '../images/quote.png'
import  axios  from 'axios'


function Comments() {
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


  const [showForm, setShowForm] = useState(false)
  const [showSubmit, setshowSubmit] = useState(false)

  const [firstData, setFirstData] = useState({firstName: "",});
  const [lastData, setLastData] = useState({lastName: "",});
  const [commentData, setCommentData] = useState({comment:"",});
  const {firstName} = firstData
  const {lastName} = lastData
  const {comment} = commentData

  const onSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/dentalglow/reviews', { firstName, lastName, comment })
    .then(res=>{
      console.log(res.data);
    })
    setFirstData({ firstName: '', })
    setLastData({ lastName: '', })
    setCommentData({ comment: '', })
    toggleForm()
    setshowSubmit(true)
  }   

  const onChangeFname = (e) => {
    setFirstData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }) )
  }
  const onChangeLname = (e) => {
    setLastData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }) )
  }
  const onChangeComment = (e) => {
    setCommentData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }) )
  }
const toggleForm = () => {
  setShowForm(false)
}
const openForm = () => {
  if(showForm){
    setShowForm(false)
  }
  else if(!showForm){
    setShowForm(true)

  }
}
  return (
    <div>
      <div className={`commentContainer ${isContentVisible ? 'visible' : ''}`} ref={contentRef}>
      <div className='leftC'> 
        <div> 
        <img src={quote} alt ="quotation mark" className='quoteIcon'/>
        <div className='quoteTitle' > Words of praise from our valued patients </div>
        <div> 
          <div> <img src= {stars} alt='5 stars' className='starIcon'/> </div> 
          <div className='starReview'> <a href='/reviews'> <strong> 100 + 5-star reviews!  </strong></a> </div>
         
          {showSubmit? ( <div> We appreciate you sending us your feedback. </div>) : <> <div onClick={openForm} className='recently'> We’d love to hear your feedback!</div> </>}
          {showForm ? (
            <section className="form">
            <form onSubmit={onSubmit}> 
            <div className="form-group">
              
              <div className="form-group">
                  <input type="text" className="form-control" id="firstName" 
                  name="firstName" 
                  required
                  value ={firstName}
                  onChange={onChangeFname}
                  placeholder= "First Name" 
                  autoComplete="off"
                  />
              </div>
              <div className="form-group">
                  <input type="text" className="form-control" id="lastName" 
                  name="lastName" 
                  required
                  value = {lastName}
                  onChange={onChangeLname}
                  placeholder= "Last Name" 
                  autoComplete="off"

                 />
              </div>        
              <div className="form-group">
                  <input type="text" className="form-control" id="comment" 
                  name="comment" 
                  required
                  value = {comment}
                  onChange={onChangeComment}
                  placeholder= "Comment" 
                  autoComplete="off"

                 />
              </div>        
            </div>
            <div className="form-group">
              <button className="startBtn" type="submit" > Send Feedback</button>
            </div>
            </form>
          </section>
            ) : "" }
          </div>
        </div>
      </div>
      <div className='rightC'>
        <div className='reviewOne'> A wonderful dental clinic that truly meets their patients where they are, without any judgment or shame. This level of care and understanding sets them apart from other dentists in the GTA. I had a great experience with them and highly recommend them for anyone looking for compassionate and quality dental care. 
          <p className='author'> - Catherine M.</p>
        </div>
        <div className='reviewTwo'> It is always a pleasure to visit. The clinic is beautifully designed and exudes a calming and clean atmosphere. The staff members are always cheerful and welcoming, and they are incredibly kind and genuine. I highly recommend Dental Glow for anyone looking for a positive dental experience. 
          <p className='author'> - Jennifer L. </p>
        </div>
      </div>

      </div>
      <div className='reviewThree'> An outstanding dental clinic in every way. The staff is incredibly friendly and attentive, and the assistants work hard to ensure you feel at ease. The level of care provided by the skilled dentists is truly unparalleled. I cannot recommend it highly enough - the place, the staff, and the dentists are simply wonderful! 
          <p className='author'> Olivia C.</p>
      </div>
    </div>
  )
}

export default Comments