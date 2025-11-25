import React from 'react'

export default function Loading() {
  return (
    <div className='w-full h-screen grid place-items-center bg-base-200'>
      <span className="loading loading-spinner loading-xl text-primary"></span>
    </div>
  )
}
