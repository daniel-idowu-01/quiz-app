import React from 'react'
import { Link  } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '../Client'
import { useState } from 'react'
import '../index.css'

function SignUp() {

  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  // ANIMATION ON SIGN UP FORM
  const item = {
    exit: {
      opacity: 0,
      height:0,
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
        delay: .3
      }
    }
  }

  // to submit form data
  async function handleSubmit() {
    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: email,
          password: password,
          options: {
            data: {
              first_name: firstname,
              last_name: lastname,
            }
          }
        }
      )
      if (error) {
        alert(error)
      }
      else {
        alert('Check your email')
      }
      
    } catch (error) {
      console.log(error)
    }
  }
  
   return (
    <div className='flex justify-center items-center text-black w-full h-full'>
     <AnimatePresence>
      <motion.div
      variants={ item }
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: '70vh', opacity: 1 }}
      transition={{ duration: .3 }}
      exit='exit'
      className=' bg-white shadow-xl rounded-lg w-full mx-5 md:mx-0 md:w-1/4 p-10 relative -top-10'
      >
        <p className='relative -top-14 px-3 py-5 text-center text-white bg-gradient-to-br from-babyblue to-blue rounded-lg'>
            Sign Up
        </p> 
      <form onSubmit={handleSubmit}>
        <input
         type='text'
         placeholder='First Name'
         name='firstname'
         className='w-full bg-gray-500 bg-opacity-20 px-4 py-2 rounded-full outline-none'
         onChange={(e) => setFirstName(e.target.value)}
        />
        <br /> <br />

        <input
         type='text'
         placeholder='Last Name'
         name='lastname'
         className='w-full bg-gray-500 bg-opacity-20 px-4 py-2 rounded-full outline-none'
         onChange={(e) => setLastName(e.target.value)}
        />
        <br /> <br />
        
        <input
         type='email'
         placeholder='Email'
         name='email'
         className='w-full bg-gray-500 bg-opacity-20 px-4 py-2 rounded-full outline-none'
         onChange={(e) => setEmail(e.target.value)}
        />
        <br /> <br />

        <input
         type='password' 
         placeholder='Password' 
         name='password'
         className='w-full bg-gray-500 bg-opacity-20 px-4 py-2 rounded-full outline-none'
         onChange={(e) => setPassword(e.target.value)}
        /> 
        <br /> <br />

        <button type='submit'
         className='bg-gradient-to-r from-babyblue via-blue  to-navyblue px-10 py-2 hover:opacity-50 text-white rounded-full mt-3 open-sans w-full'
        >
            Sign Up
        </button>
        </form>
        <p className='relative top-8 text-center'>Have an account? <Link to='/login' className='text-navyblue underline'>Login</Link></p>
      </motion.div>
     </AnimatePresence>
    </div>
  )
} 

export default SignUp
