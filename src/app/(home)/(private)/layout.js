
import PrivateRoute from '@/context/PrivateRoute.jsx'
import React from 'react'

export default function PrivateLayout({children}) {
  return (
    <PrivateRoute>
        
      {children}
  
    </PrivateRoute>
  )
}
