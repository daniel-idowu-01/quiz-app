import React from 'react'
import data from '../Data'
import '../index.css'
import { TbLetterX } from 'react-icons/tb'
import { useState, useEffect, createContext } from 'react'
import FullStar from '../images/full-star.png'
import EmptyStar from '../images/empty-star.png'
import '../index.css'

 const Quiz = () => {

    const [ number, setNumber ] = useState(0)
    const [ disableBtn, setDisableBtn ] = useState(false)
    const [ score, setScore ] = useState(0)
    const [ answer, setAnswer] = useState('')
    const [showScore, setShowScore] = useState(false)

    // style of buttons
    let answerStyle = 'w-36 md:w-72 rounded-lg bg-indigo-600 px-4 py-2 text-white mt-5 hover:cursor-pointer hover:opacity-75'

    useEffect(() => {
      // to disable the answers at the end of the quiz
      if (number == 9) {
        setDisableBtn(true)
        setShowScore(true)
      }
    }, [number])

    // to get if answer is wrong or correct from the user
    const getAnswer = (e) => {
      setAnswer(e)

      if (e == data[number].correctAnswer) {
        if (number < 9) {
          setScore(score + 1)
          setNumber(number + 1)
        } else {
          setNumber(0)
        }
        
      } else {
        setNumber(number + 1)   
      }
    }

    // function for user to play again
    const playAgain = () => {
      setShowScore(false)
      setNumber(0)
      setScore(0)
    }
    
  return (
      <div className='flex justify-center items-center w-full mt-20'>
        <div className='md:w-1/2 text-center p-5 '>
          {/* The question of the quiz */}
          <p className='cormorant-upright text-xl'>{ number + 1 }. { data[number]['question'] }</p>
          <div className='grid grid-cols-2 place-items-center'>

            {/* Position of the correct answer if the number is even */}
            { number % 2 == 0 ?
              <p
                className={answerStyle} 
                onClick={ () => getAnswer(data[number].correctAnswer) }
              >
                  { data[number].correctAnswer }
              </p>
              : null }

              {/* Mapping of the incorrect answers */}
            { data[number].incorrectAnswers.map((incorrectAnswer, index) => (
              <p
                className={answerStyle}
                key={index} 
                onClick={ () => getAnswer(incorrectAnswer) }
              >
                  { incorrectAnswer }
              </p>
            )) }

            {/* Position of the correct answer if the number is odd */}
            { number % 2 == 1 ?
              <p
                className={answerStyle}
                onClick={() => getAnswer(data[number].correctAnswer) }
              >
                  { data[number].correctAnswer }
              </p>
              : null }
          </div>
        </div>

        {/* Div to show score of user */}
        <div
         className={`${showScore ? 'block' : 'hidden'} w-96 md:w-1/2 h-96 bg-black absolute`}>
          <div className='mx-10'>
            {/* Image of stars to show corresponding to the score of user */}
            { score > 6 ? 
              <div className='flex justify-center items-center mt-5'>
                  <img className='w-20 h-20' src={FullStar} alt='' />
                  <img className='w-20 h-20' src={FullStar} alt='' /> 
                  <img className='w-20 h-20' src={FullStar} alt='' />
              </div> : ''
            }

            { score > 4 && score < 7 ? 
              <div className='flex justify-center items-center'>
                  <img className='w-20 h-20' src={FullStar} alt='' />
                  <img className='w-20 h-20' src={FullStar} alt='' /> 
                  <img className='w-20 h-20' src={EmptyStar} alt='' />
              </div> : ''
            }

            { score > 0 && score < 5 ? 
              <div className='flex justify-center items-center'>
                  <img className='w-20 h-20' src={FullStar} alt='' /> 
                  <img className='w-20 h-20' src={EmptyStar} alt='' /> 
                  <img className='w-20 h-20' src={EmptyStar} alt='' />
              </div> : ''
            }

            { score == 0 ? 
              <div className='flex justify-center items-center'>
                  <img className='w-20 h-20' src={EmptyStar} alt='' /> 
                  <img className='w-20 h-20' src={EmptyStar} alt='' /> 
                  <img className='w-20 h-20' src={EmptyStar} alt='' />
              </div> : ''
            }

            <div className='flex justify-center items-center'>
              <div>
                <p className='text-white text-center text-2xl relative top-32 cormorant-upright'> Your Score: { score } </p>
                <button
                 onClick={playAgain}
                 className=' bg-white text-black px-5 py-2 rounded-md relative top-40'>
                  Play Again
                </button>
              </div>
            </div>
          </div>
            
        </div>
      </div>
  )
}

export default Quiz
