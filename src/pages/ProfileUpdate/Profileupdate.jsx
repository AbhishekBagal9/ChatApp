import React from 'react'
import "./profileupdate.css";
import assets from '../../assets/assets';
const profileupdate = () => {
  return (
   <div className="profile">
    <div className="profile-container">
      <form action="">
        <h3>profile Details</h3>
        <label htmlFor="avatar">
          <input type="file" name="" id="avator" accept='.png,.jepg,.jpg' hidden />
          <img src={assets.avatar_icon} alt="" />
          upload profile image
        </label>
        <input type="text" name="" id="" placeholder='your Name' required/>
 <textarea placeholder='Write profile Bio' required></textarea>
       <button type='submit'>Submit</button>
      </form>
      <img className='profilepic' src={assets.logo_icon} alt="" />
    </div>
   </div>
  )
}

export default profileupdate