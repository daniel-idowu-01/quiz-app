import React from 'react'
import { Link  } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import '../index.css'

function Login() {

   // ANIMATION ON LOGIN FORM
   const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
        delay: .3
      }
    }
  }

  return (
    <div className='flex justify-center items-center text-black backdrop-filter  w-full h-full'>
      <AnimatePresence>
       <motion.div
        variants={ item }
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: '55vh', opacity: 1 }}
        transition={{ duration: .3 }}
        exit='exit'
        className=' bg-white shadow-xl rounded-lg w-full mx-5 md:mx-0 md:w-1/4 p-10 relative -top-10'>
          <p className='relative -top-14 px-3 py-5 text-center text-white bg-gradient-to-br from-babyblue to-blue rounded-lg'>
            Login
          </p> 
        
        <input
         type='email'
         placeholder='Email'
         className='w-full bg-gray-500 bg-opacity-20 px-4 py-2 rounded-full outline-none '
        />
        <br /> <br />
        <input
         type='password' 
         placeholder='Password' 
         className='w-full bg-gray-500 bg-opacity-20 px-4 py-2 rounded-full outline-none '
        /> 
        <br /> <br />
        <button
         className='bg-gradient-to-r from-babyblue via-blue  to-navyblue px-10 py-2 hover:opacity-50 text-white rounded-full mt-3 open-sans w-full'
        >
            Login 
        </button>
        <p
         className='relative top-8 text-center'>Don't have an account? <Link to='/signup' className='text-navyblue hover:transform hover:scale-110 underline'>Sign Up</Link></p>
       </motion.div>
      </AnimatePresence>
    </div>
  )
} 

export default Login
