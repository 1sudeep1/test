'use client'
import React, { useEffect, useState } from 'react'
import styles from '../page.module.css'
const Card = (props) => {
    // const [currentItem, setCurrentItem]= useState(0);
    //     const [counter, setCounter] = useState(0);

    //     if(counter===props.item.length-1){
    //         setCounter(0)
    //     }
    //   useEffect(()=>{
    //     setTimeout(()=>{
    //         setCounter(counter+1)
    //     }, 200)

    //   },[counter])
    return (
        <>
            <div className={styles.card1}>
                {/* <h4 className={styles.title} style={props.itemId == counter ? { backgroundColor: 'red' } : {}} >{props.item}</h4> */}
                    <h4 className={styles.title} style={{ backgroundColor: props.itemId === props.currentPik ? 'red' : null }}>{props.item}</h4>
            </div>
        </>
    )
}
export default Card