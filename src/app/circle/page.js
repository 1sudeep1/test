'use client'
import React, { useEffect, useState } from 'react'
import Card from '../card/page'
const Circle = () => {
    const prizes = ['Car', 'House', 'Jet', 'Teddy Bear']
    const [click, setClick] = useState(false)
    const [currentPik, setCurrentPik] = useState(0)
    const [win, setWin]= useState('')
    useEffect(() => {
        
        if (click) {
            if (currentPik === prizes.length - 1) {
                setCurrentPik(0)
            }
            setTimeout(() => {
                setCurrentPik(currentPik + 1)
            }, 50)
        }
    }, [currentPik, click])

    const handleStart = () => {
        setClick(true)
    }
    const handleStop = () => {
        setClick(false)
        setWin('congratulation you have won:- ' + prizes[currentPik+1])
    }
    return (
        <div>
            {prizes.map((item, id) => {
                return <Card item={item} itemId={id} currentPik={currentPik} />
            })}
            <button onClick={handleStart}>start</button>
            <button onClick={handleStop}>stop</button>
            {/* <p>Congratulaion you have won {prizes[currentPik]}</p> */}
            <p>{win}</p>
        </div>
    )
}

export default Circle