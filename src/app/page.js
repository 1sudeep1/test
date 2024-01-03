// import Image from 'next/image'
// import styles from './page.module.css'

// const Home=()=>{
//   const productsDetails=[
//     {
//       id:1,
//       productImage:'https://static-01.daraz.com.np/p/8e657f0ccabb8140080ef017ab210710.jpg',
//       productTitle:'Hawkins Black Contura Pressure Cooker',
//       price:5215
//     },
//     {
//       id:2,
//       productImage:'https://www.cgdigital.com.np/api/images/products/PySnQZ_1640164345-CG-QH80A05.webp',
//       productTitle:'CG Quartz Heater: CGQH08A05',
//       price:1340
//     },
//     {
//       id:3,
//       productImage:'https://www.cgdigital.com.np/api/images/products/9njGTG_1666002913-2.png',
//       productTitle:'LG 7 Kg Front Load Washing Machine : FV1207S4W Online in Nepal - CG Digital',
//       price:76890
//     },
//     {
//       id:4,
//       productImage:'https://www.cgdigital.com.np/api/images/products/oWpIqA_1637835240-026.webp',
//       productTitle:'Buy CG Hot & Normal Water Dispenser CGWD15M02HN Online',
//       price:3600
//     },

//   ]
//   return (
//     <>
//       <div className={styles.main}>
//         {productsDetails.map((item, id)=>(
//           <div className={styles.card} key={id}>
//             <img src={item.productImage} className={styles.productImage} />
//             <h4>{item.productTitle}</h4>
//             <p className={styles.price}>Price: Nrs {item.price}</p>
//           </div>
//         ))}
//       </div>
//       <input type='text' placeholder='username'/> <br/>
//       <input type='password' placeholder='password'/> <br/>
//       <button className={styles.btn} type='btn'>Login</button>
//     </>
//   )
// }
// export default Home

'use client'
import MainPage from '@/components/mainPage/page';
import styles from './page.module.css'
import React, { useState } from 'react'
import { GrLike } from "react-icons/gr";
const LikeButton = () => {
  const [likeCount, setLikeCount] = useState(0)
  const isLiked = likeCount === 1;
  const handleLikeCounter = () => {
    setLikeCount(isLiked ? 0 : 1);
  }
  return (
    <>
      <MainPage>
        <button className={isLiked ? styles.likeBtn : styles.unLikeBtn} onClick={handleLikeCounter}><GrLike />
          {isLiked ? 'UnLike' : 'Like'}
        </button>
      </MainPage>

    </>
  )
}

export default LikeButton