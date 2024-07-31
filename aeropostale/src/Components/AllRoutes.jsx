import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'

const AllRoutes = () => {
  return (
    <Routes>
        
        <Route path="/login" element={<Login />} />

    </Routes>
  )
}

export default AllRoutes
