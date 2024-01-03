'use client'
import { increaseWidth, decreaseWidth } from '@/redux/reducersSlice/boxSlice'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const Box = () => {
    const value = useSelector((state, actions) => state.box)
    const dispatch= useDispatch();
    return (
        <>
            <div style={{ backgroundColor: value.backgroundColor, padding: value.padding, height: value.height, width: value.width }}>
                Box
                width: {value.width}
            </div>
            <button onClick={()=>dispatch(increaseWidth())}>Increase Width</button>
            <button onClick={()=>dispatch(decreaseWidth())}>Decrease Width</button>
        </>
    )
}

export default Box