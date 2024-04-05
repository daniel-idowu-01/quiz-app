import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { TbLetterX } from 'react-icons/tb'
import { AiOutlineQuestion } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlinePoweroff } from 'react-icons/ai'
import { BiHistory } from 'react-icons/bi'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import MaleUser from '../images/male_user.jpg'
/* import FemaleUser from '../images/female_user.jpg' */
import Typewriter from 'typewriter-effect'

function Nav() {

  /* TO SHOW AND HIDE SIDEBAR */
  const [showSideBar, setShowSideBar] = useState(false)

  const sideBarFunc = () => {
    setShowSideBar(!showSideBar)
  }


  /* ANIMATION FOR SIDEBAR */
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
      
  return (
    <div className='flex justify-between px-10 md:px-20 py-7'>
      <GiHamburgerMenu
       className='cursor-pointer hover:transform hover:scale-110 text-3xl text-navyblue'
       onClick={sideBarFunc}
      />

      <div className='text-blue cormorant-upright text-4xl'>
        <Link to='/'>
          <Typewriter
            onInit={(typewriter) => {
            typewriter
            .typeString('Sport Quiz')
            .pauseFor(2000)
            .deleteAll()
            .typeString('Sport Quiz')
            .pauseFor(2000)
            .start()
          }}>
          </Typewriter>
        </Link>
      </div>

      <div className='flex justify-center items-center divide-x-2 divide-black divide-opacity-30'>
        <Link
         to='/login'
         className='px-2 open-sans hidden md:block hover:transform hover:scale-110 cursor-pointer'>Login</Link>
        <Link
         to='./signup'
         className='px-2 open-sans hidden md:block hover:transform hover:scale-110 cursor-pointer'>Sign Up</Link>
      </div>


    {/* SideBar */}
    <AnimatePresence>
      {
        showSideBar && <motion.nav
       variants={ item }
       initial={{ height: 0, opacity: 0 }}
       animate={{ height: '100vh', opacity: 1 }}
       transition={{ duration: .3 }}
       exit='exit'
       className={`px-2md:px-0 h-full w-3/4 md:w-1/4 p-2 absolute top-0 left-0 bg-navyblue rounded-sm z-10 transition duration-300 ease-in-out `}
       >
        <TbLetterX
         className='text-white float-right text-3xl relative top-3 right-5 hover:transform hover:scale-110 hover:cursor-pointer'
         onClick={() => setShowSideBar(false)}
        />
        <img src={ MaleUser } className='rounded-full w-20 h-20 m-auto relative top-14' alt='' />
        <p className='text-sm md:text-lg text-white text-center opacity-60 relative top-20'>example@gmail.com</p>

        <div className='h-1/2 space-y-2 items-center relative top-20 px-5 md:px-14'>
          <Link to='/quiz'>
            <p
            onClick={() => setShowSideBar(false)}
            className='text-white text-center relative top-20 border-t-2 border-white border-opacity-10 p-2 py-5 align-middle'>
              <AiOutlineQuestion className='inline-block mr-2' />
              Play Quiz
            </p>
          </Link>

          <Link to='/quiz'>
            <p
            onClick={() => setShowSideBar(false)}
            className='text-white text-center relative top-20 border-t-2 border-white border-opacity-10 p-2 py-5 align-middle'>
              <BiHistory className='inline-block mr-2' />
              Score History
            </p>
          </Link>


          <Link to='/quiz'>
            <p
            onClick={() => setShowSideBar(false)}
            className='text-white text-center relative top-20 border-t-2 border-white border-opacity-10 p-2 py-5 align-middle'>
              <AiOutlineUser className='inline-block mr-2' />
              My Profile
            </p>
          </Link>

          <Link to='/quiz'>
            <p
            onClick={() => setShowSideBar(false)}
            className='text-white text-center relative top-20 border-t-2 border-white border-opacity-10 p-2 py-5 align-middle'>
              <AiOutlinePoweroff className='inline-block mr-2' />
              Log Out
            </p>
          </Link>

          
          
        </div>
       </motion.nav>}
      </AnimatePresence>
    </div>
  )
}

export default Nav