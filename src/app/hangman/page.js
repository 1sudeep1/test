'use client'
import React, { useState } from 'react'

const Hangman = () => {
  const answer = 'JAVASCRIPT'
  const [question, setQuestion] = useState('J V SCR PT')

  const [lives, setLives] = useState(3);
  const [wrongInputs, setWrongInputs] = useState('');

  const handleInputChange = (e, id) => {
    const expectedChar=answer[id];
    if (e.target.value.toUpperCase() !== expectedChar && e.target.value !== '') {
      setLives(lives - 1)
      setWrongInputs('Wrong Inputs are: ' + (wrongInputs + e.target.value))
    } else {
      const expectedOutput=question.split('').map((item, id)=>{
        if(item==' ' && answer[id]==e.target.value.toUpperCase()){
          return e.target.value.toUpperCase();
        }
        return item
      })
      setQuestion(expectedOutput.join(''))
    }
  }


  if (lives === 0) {
    return (<div><p>You failed. No lives left.</p></div>)
  }

  return (
    <>
      {question.split('').map((item, id) => {
        if (item === ' ') {
          return <input type='text' onChange={(e) => handleInputChange(e, id)} />
        } else {
          return (
            <>
              <input type='text' value={item} />
            </>
          )
        }
      })}
      <p>you have {lives} lives remaining</p>
      <p>{wrongInputs}</p>
    </>
  )
}

export default Hangman