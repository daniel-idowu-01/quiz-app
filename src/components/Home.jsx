import React from 'react'
import HomeImg from '../images/6308.png'
import QMark from '../images/question-mark.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <div>
    <motion.div
     className='md:flex justify-between'
     initial={{ x: '-100px' }}
     animate={{ x: 0 }}
     transition={{ type: 'spring', duration: 1 }}
     >
      <div className='md:w-1/2 flex justify-center items-center'>
        <div className='flex flex-col gap-3 p-5 px-10 md:px-20'>
            <h3 className='text-blue cormorant-upright opacity-80 text-4xl'>Sport Quiz</h3>
            {/* Question mark designs */}
            <img src={ QMark } className='absolute top-56 opacity-10 w-20 h-20 transform scale-x-[-1] -rotate-45' alt='' />
            <img src={ QMark } className='absolute top-48 left-64 opacity-10 w-20 h-20 transform rotate-12' alt='' />
            <img src={ QMark } className='absolute top-80 left-96 opacity-10 w-10 h-10' alt='' />
            <p
             className=' font-mono leading-7 mt-3'>
                Welcome to our Quiz App! Test your knowledge and challenge yourself with a variety of fun and exciting quizzes covering a range of topics in sports. With our user-friendly interface and engaging content, you're sure to have a great time while learning new things.
            </p>
            <Link to='/quiz'>
              <button
              className='bg-gradient-to-r from-blue to-darkblue bg-opacity-90  px-10 py-2 hover:drop-shadow-md text-white rounded-full mt-3 open-sans'> 
                  Play Quiz
              </button>
            </Link>
        </div>
      </div>

      <div className='md:w-1/2'>
        <img src={ HomeImg } alt='' />
      </div>
    </motion.div>
    </div>
  )
}

export default Home
