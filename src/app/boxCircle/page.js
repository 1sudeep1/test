'use client'
import { changeCircle, changeSquare } from '@/redux/reducersSlice/boxCircleSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const BoxCircle = () => {
    const value = useSelector((state) => state.boxCircle)
    const dispatch= useDispatch();
    return (
        <>
            <div style={{ backgroundColor: value.backgroundColor, height: value.height, width: value.width, borderRadius: value.borderRadius+'%' }}>
                BoxCircle
            </div>

            <button onClick={()=>dispatch(changeCircle())}>Circle</button>
            <button onClick={()=>dispatch(changeSquare())}>Square</button>
        </>
    )
}

export default BoxCircle