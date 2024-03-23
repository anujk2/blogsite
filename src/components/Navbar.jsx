import React from 'react'

export default function Navbar() {
  return (
   
<>
<nav className="bg-black text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <a className="text-xl font-bold" href="/">Blog</a>
      <div className="hidden md:block">
        <div className="flex ml-10 space-x-4">
          <a className="text-white hover:text-gray-300" href="/">Home</a>
          <a className="text-white hover:text-gray-300" href="/blog">All Blogs</a>
          <a className="text-white hover:text-gray-300" href="/profile">Profile</a>
          <a className="text-white hover:text-gray-300" href="#">Contact Us</a>
        </div>
      </div>
    </div>
  </div>
</nav>


</>

  )
}
