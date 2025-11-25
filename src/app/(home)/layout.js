import Footer from '@/Components/Shared/Footer'
import Navbar from '@/Components/Shared/Navbar'
import React from 'react'

export default function HomeLayout({children}) {
  return (
    <div className='flex flex-col min-h-screen '>
        <header className="sticky top-0 z-50">
          <Navbar></Navbar>
        </header>
        <main className="flex-1">{children}</main>

        <footer>
          <Footer></Footer>
        </footer>
     
    </div>
  )
}
