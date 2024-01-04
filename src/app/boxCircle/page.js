'use client'
import { changeShape, changeWidth, changeColor, reset} from '@/redux/reducersSlice/boxCircleSlice'
import React from 'react'
import { useDispatch, useSelector,} from 'react-redux'
const BoxCircle = () => {
    const { backgroundColor, height, width, borderRadius } = useSelector((state) => state.boxCircle)
    const dispatch = useDispatch();
    const radius=width/2;
    return (
        <>
            <div onClick={() => dispatch(changeShape())}
                style={{ backgroundColor, height: height + 'px', width: width + 'px', borderRadius: borderRadius + '%' }}>
            </div>
            <h2>{(borderRadius==0)? `Area of square is ${width*height} sq.meter` : `Area of circle is ${(Math.PI*radius**2).toFixed(2)} sq.meter`}</h2>
            <button onClick={()=>dispatch(changeWidth('inc'))}>inrease width</button>
            <button onClick={()=>dispatch(changeWidth('dec'))}>decrease width</button><br />
            <input type="text" placeholder='color-name' onChange={(e)=>dispatch(changeColor(e.target.value))} /> <br />
            <button onClick={()=>dispatch(reset())}>Reset</button>
        </>
    )
}

export default BoxCircle