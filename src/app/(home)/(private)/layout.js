
import PrivateRoute from '@/context/PrivateRoute'
import React from 'react'

export default function PrivateLayout({children}) {
  return (
    <PrivateRoute>
        
      {children}
  
    </PrivateRoute>
  )
}
