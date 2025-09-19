import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='text-center bg-red-600 bg-opacity-35 text-yellow-400 py-2'>
        <div className='flex items-center justify-center gap-4'>
          <Link to="/" >About</Link>
          <Link to="/">Contact</Link>
        </div>
        <p className='text-sm'>Created By Dharmik Jethwani </p>
    </footer>
  )
}

export default Footer
