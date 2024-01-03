'use client'
import React from 'react'
import RightSide from './rightside/page'

const Footer = (props) => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '15px' }}>
      <p>Footer</p>
      <ul>
        {
          props.footerContent.map((item) => (
            <li>{item}</li>
          ))
        }
      </ul>

      {/* <button onClick={() => props.increment('dec')}>Minus</button>
      <button onClick={() => props.increment('inc')}>Add</button> */}

    
{/* 
      <button onClick={props.setNum(props.num-1)}>Minus</button>
      <button onClick={props.setNum(props.num+1)}>Add</button> */}

      <RightSide increment={props.increment}/>

    </div>
  )
}

export default Footer