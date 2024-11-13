import React from 'react'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Login from './Login'
import Profile from './Profile'
import Signup from './Signup'
import Tasks from './Tasks'
import NotFound from './NotFound'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App