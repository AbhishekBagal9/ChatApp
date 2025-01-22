import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from './pages/Login/login'
import Chat from './pages/Chat/chat'
import ProfileUpdate from './pages/ProfileUpdate/profileupdate'
const App = () => {
  return (
    <>

    <Routes>
           <Route path='/' element={<Login/>}/>
           <Route path='/chat' element={<Chat/>}/>
           <Route path='/profileupdate' element={<ProfileUpdate/>}/>
    </Routes>
    
    </>
  )
}

export default App





