import React from 'react'
import { Link } from 'react-router-dom'
const Navbar2 = () => {
  return (
    <div>
      <div className="flex gap-6">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/product">Product</Link>
      <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar2
