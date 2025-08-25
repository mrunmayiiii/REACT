
import { useEffect, useRef, useState } from 'react'
import './App.css'

/////variable to persist value across rerenders--- useRef is used
/////returns a object

function App() {
const [count,setCount]=useState(0);

let val=useRef(0);
let btnref=useRef(0);

function handleIncrement(){
  val.current=val.current+1;
  console.log("value of val is:",val.current)
  setCount(count+1);
}
useEffect(()=>{
  console.log("component re rendered")
})
function changeColor(){
     btnref.current.style.backgroundColor="red";
}

  return (
    <div>
      
      <button
      ref={btnref}
       onClick={handleIncrement}>
        increment
      </button>
      <br />
      <br />
      <button onClick={changeColor}>
        change colour of first button
        </button>
      <br />
      <h1>Count : {count}</h1>
    </div>
  )
}

export default App
