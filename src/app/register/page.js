// 'use client'
// import Footer from '@/components/footer/page'
// import Header from '@/components/header/page'
// import Link from 'next/link'
// import React, { useState } from 'react'

// const Form=()=>{
//     return (
//         <>
//             <form>
//                 <input type='text' placeholder='First Name' /> 
//                 <input type='text' placeholder='Last Name' /><br /> <br />
//                 <input type='email' placeholder='Email' /><br /> <br />
//                 <button>Register</button>
//             </form>
//         </>
//     )
// }

// const Register = () => {
//     const [num, setNum]= useState(1);
//     const increment=(action)=>{
//         setNum(action==='inc'? num+1: num-1)
//     }
//     return (
//         <>
//             <Header/> 
//             <div>Register Page</div> <br />
//             <Form />
//             <p>Already have account? <Link href='/login' style={{color:'blue'}}>Sign in </Link> instead</p>

//             <h1>{num}</h1>

//             {/* <button onClick={()=>increment('dec')}>Minus</button>
//             <button onClick={()=>increment('inc')}>Add</button> */}
//             <Footer footerContent={['quick links', 'about', 'contact', 'notice', 'downloads']} increment={increment} num={num} setNum={setNum}/>

//         </>
//     )
// }

// export default Register

// 'use client'
// import React, { useEffect, useState } from 'react'

// const handleSubmit=(e)=>{
//     e.preventDefault()
// console.log(e)
// }


// const Register = () => {
//     const[name, setName]= useState('')
//     // useEffect(()=>{
//     //     localStorage.setItem('fullName', 'ram')
//     // }, [])

//     useEffect(()=>{
//         const fullName= localStorage.getItem('fullName')
//         setName(fullName)
//     }, [])
//     return (
//         <>
//             <form action="" onSubmit={handleSubmit}>
//                 <input type="text" value={name} />
//                 <input type="text" />
//                 <input type="text" />
//                 <input type="text" />
//                 <button>Register</button>
//             </form>

//         </>
//     )
// }

// export default Register




'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { setUserName } from '@/redux/reducersSlice/userSlice';
import {setIncrement, setDecrement } from '@/redux/reducersSlice/counterSlice';

const getCharacterValidationError = (str) => {
    return `Your password must have at least 1 ${str} character`;
  };

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password:Yup.string()
  .min(5, 'password to short')
  .required('please enter a password')
  .matches(/[0-9]/, getCharacterValidationError("digit"))
  .matches(/[a-z]/, getCharacterValidationError("lowercase"))
  .matches(/[A-Z]/, getCharacterValidationError("uppercase")),

  confirmPassword:Yup.string()
  .required("please retype your password")
  .oneOf([Yup. ref("password")], "Passwords does not match"),
});

const Register = () => {
  const value= useSelector((state, actions)=>state.user)
  const counterValue= useSelector((state, actions)=>state.counter)
  const dispatch= useDispatch();
  const handleName=()=>{
      dispatch(setUserName('ram'))
  }

  const handleCounter=(action)=>{
    dispatch(action==='plus'? setIncrement() : setDecrement())
  }

  return (
    <div>
      <h2>{value.userName}</h2>
      <button onClick={handleName}>ChangeName</button>

      <h2>{counterValue.counter}</h2>
      <button onClick={()=>handleCounter('plus')}>Increment</button>
      <button onClick={()=>handleCounter('minus')}>Decrement</button>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password:'',
          confirmPassword:''
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          // same shape as initial values
          console.log(values);
          actions.resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="firstName" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
  
            <Field name='password' type='password' />
            {errors.password && touched.password? <div>{errors.password}</div>:null}
  
            <Field name='confirmPassword' type='password' />
            {errors.confirmPassword && touched.confirmPassword? <div>{errors.confirmPassword}</div>:null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}


export default Register