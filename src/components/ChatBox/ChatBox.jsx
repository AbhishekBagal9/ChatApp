import React from 'react'
import "./ChatBox.css"
import assets from '../../assets/assets'
const ChatBox = () => {
  return (
    <div className='chat-box'>
      <div className="chat-user">
        <img src={assets.profile_img} alt=""  className='logo'/>
        <p>Richard Sanford <img src={assets.green_dot} className='dot' alt="" /></p>
        <img src={assets.help_icon} alt="" />
      </div>


      <div className="chat-msg">
        <div className="s-msg">
          <p className="msg">
            Hello  how are you dsfasfsdfdf 
          </p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30 PM</p>
          </div>
        </div>
        <div className="s-msg">
         <img className='msg-img'  src={assets.pic1}  />
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30 PM</p>
          </div>
        </div>
        <div className="r-msg">
          <p className="msg">
            Hello  how are you 
          </p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30 PM</p>
          </div>
        </div>
      </div>


      <div className="chat-input">
        <input type="text" placeholder='Send a message'/>
        <input type="file" id='image' accept='img/png,img/jepg' hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="" />
        </label>
        <img src={assets.send_button} alt="" />
      </div>
    </div>
  )
}

export default ChatBox