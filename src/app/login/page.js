'use client'
import React, { useState } from 'react'
import Header from '../../components/header/page'
import Footer from '../../components/footer/page'

const CustomButton=(props)=>{
    return(
        <>
            <button style={props.styling}>{props.name}</button>
        </>
    )
}

const Login = () => {
  const [num, setNum]=useState(10)
  const handleNum=(action)=>{
    return (action==='minus'? setNum(num-1) : setNum(num+1));
  }

  return (
    <>
        <Header />
        <div>Login Page</div>
        <CustomButton name='dairy milk' styling={{backgroundColor:'green', color:'white', padding:'5px'}}/>
        <CustomButton name='kitkat' styling={{backgroundColor:'blue', color:'white', padding:'5px'}}/>
        <CustomButton name='orange' styling={{backgroundColor:'orange', color:'white', padding:'5px'}}/>
        <CustomButton name='catberry' styling={{backgroundColor:'violet', color:'white', padding:'5px'}}/>
<br /><br />
    
        <button onClick={()=>handleNum('minus')}>Minus</button>
            <h1>{num}</h1>
        <button onClick={()=>handleNum('plus')}>Add</button>

        <button onClick={()=>setNum(num-1)}>Minus</button>
            <h1>{num}</h1>
        <button onClick={()=>setNum(num+1)}>Add</button>
        <Footer footerContent={['quick links', 'about', 'contact', 'notice', 'downloads']}/>


    </>
  )
}

export default Login