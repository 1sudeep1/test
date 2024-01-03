'use client'
import React, { useEffect, useState } from 'react'
import Card from '../card/page'
const prizes = ['smartphone', 'smartTV', 'fridge', 'cooler']
const Lottery = () => {
  const [currentPik, setCurrentPik] = useState(0);
  const [winMessage, setWinMessage]= useState('');
  const [startGame, setStartGame]= useState(false);

let timer;
    useEffect(() => {
        timer=setTimeout(() => { 
          if (currentPik === prizes.length-1) {
            setCurrentPik(0)
          }else{
            setCurrentPik(currentPik + 1)
          }
        }, 1000)
    }, [currentPik])




  const startLottery=()=>{
    setStartGame(true)
  }

  const stopLottery=()=>{
    clearTimeout(timer)
    
    setWinMessage("Congratulation you have won " + prizes[currentPik])

  }
  return (
    <>
      {
        prizes.map((item, id) => {
          return <Card item={item} itemId={id} currentPik={currentPik} />
        })

      }
      <p>{winMessage}</p>

      <button onClick={startLottery}>Start</button>
      <button onClick={stopLottery}>Stop</button>
    </>
  )
}

export default Lottery