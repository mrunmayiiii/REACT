import React, { use, useState } from 'react'
import './Counter.css'
const Counter = () => {
    //useState
    const [count,setCount]=useState(0);
    /////count is var initialised with 0 and serCount in function
  return (
    <div className='counter-container'>
        <p id='para'> You clicked {count} times </p>
        <button id='btn' onClick={()=>{setCount(count+1)}}> click me </button>

    </div>
  )
}

export default Counter