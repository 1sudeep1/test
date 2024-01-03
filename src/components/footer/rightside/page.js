import React from 'react'

const RightSide = (props) => {
    return (
        <>

            <div>RightSide</div>
            <button onClick={() => props.increment('dec')}>Minus</button>
            <button onClick={() => props.increment('inc')}>Add</button>
        </>
    )
}

export default RightSide