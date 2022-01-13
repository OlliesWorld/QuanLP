import Head from 'next/head'
import { useState } from 'react'
import questions from '../questions.json'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import Product from '../assets/quan_home_product2.png'

export default function Home() {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState([]) 
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)   

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1
    prevQues >= 0 && setCurrentQuestion(prevQues)
  }
  
  const handleNext = () => {
    const nextQues = currentQuestion + 1
    nextQues < questions.length && setCurrentQuestion(nextQues)
  }

  const handleAnswerOption = (answer) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answer }),
    ])
    setSelectedOptions([...selectedOptions])
    
  }

  const handleSubmitButton = () => {
    let newScore = 0;
    for (let i = 0; i < questions.length; i++) {
      questions[i].answerOptions.map(
        (answer) =>
          answer.isCorrect &&
          answer.answer === selectedOptions[i]?.answerByUser &&
          (newScore += 1)
      )
    }
    setScore(newScore);
    setShowScore(true);
  };

  return (
    <div className='m-auto bg-qwhite h-screen'>
      <Head>
        <title>Wellness Questionnaire</title>
        <meta name='Wellness discovery app' content='Questionnaire about your activities' />
        <link rel='icon' href='../styles/favicon.ico' />
      </Head>
      <Header />
      <div className='bg-qPurple/20 p-8'> 
      
        <h2 className='text-center text-4xl uppercase font-extrabold text-qPurple'>Wellness Questionnaire</h2> 
      </div>
      {showScore ? (
        <div className='h-screen text-center bg-qPurple text-qWhite pt-12 border-y-2 border-qYellow'>
          <p className='text-3xl font-semibold'>Thank YOU for taking this Quiz!</p>
          
          <p className='text-3xl font-semibold text-center text-qYellow mt-4'>You scored {score} out of {questions.length}</p>
            
          <p className='text-4xl mt-4'> {
              score <= 5 ? "Let's set some goals for better overall health!" : "You are a healthy person!"
            }
          </p>

          <div className='pt-20'>
              <Image src={Product} alt='screenshot of product' />
          </div>
        </div>
      ) : (
      <div className='flex flex-col w-[75%] lg:w-[40%] my-4 px-5 mx-auto justify-center items-center shadow-2xl border-2 border-qPurple/50 rounded-lg'>
        <p className='text-xl text-center' >Question {currentQuestion + 1} of {questions.length}</p>
        <div className='mt-4 text-2xl'>
         {questions[currentQuestion].question}
        </div>
    
      
        <div className='flex flex-col w-full'>
          {questions[currentQuestion].answerOptions.map((answer, index) => (
            <div
              key={index}
              className='flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-white/5 border-qPurple rounded-md'
              onClick={(e) => handleAnswerOption(answer.answer)}
            >
              <input type='radio' 
                name={answer.answer}
                value={answer.answer}
                onChange={(e) => handleAnswerOption(answer.answer)}
                checked={
                  answer.answer === selectedOptions[currentQuestion]?.answerByUser
                }
                className='w-6 h-6' />
              <p className='ml-6'>{answer.answer}</p>
            </div>
          ))}
        </div>
        <div className='flex justify-between w-full mt-4 text-white pb-4'>
        <button onClick={ currentQuestion + 1 === questions.length ? handlePrevious : handlePrevious}  className='w-[49%] py-3 bg-qPurple text-qWhite font-bold rounded-md hover:text-qYellow'>
            {currentQuestion  === 0 ? 'hidden' : 'Previous'}
          </button>
          
          <button onClick={ currentQuestion + 1 === questions.length ? handleSubmitButton : handleNext}  className='w-[49%] py-3 bg-qPurple text-qWhite font-bold rounded-md hover:text-qYellow'>
            {currentQuestion + 1 === questions.length ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
      )
    }
    <Footer />
    </div>
      
  )
}
