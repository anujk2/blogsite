import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
   
<>
<nav className="bg-black text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <Link className="text-xl font-bold" to="/">Blog</Link>
      <div className="hidden md:block">
        <div className="flex ml-10 space-x-4">
          <Link className="text-white hover:text-gray-300" to="/">Home</Link>
          <Link className="text-white hover:text-gray-300" to="/blog">All Blogs</Link>
          <Link className="text-white hover:text-gray-300" to="/profile">Profile</Link>
          <Link className="text-white hover:text-gray-300" to="#">Contact Us</Link>
        </div>
      </div>
    </div>
  </div>
</nav>


</>

  )
}
