import React, { useState, useEffect } from 'react'
import './App.css'

function App() {

  const[count,setCount]= useState(0);
  const[total,setTotal]= useState(1);
  /////useEffect--- used to create side effects

  //first -> side effct functions
  //second -> clean up function
  //third -> comma sep dependencies list

  ///variation 1-----------------------------
  // useEffect(()=>{
  //      alert("i will run on every render"); 
  // })

  ///variation 2----------------------------
//   useEffect(()=>{
//     alert("i will run on only first render"); 
//   },[])
function handleClick() {
    setCount(count + 1);
}
function handleTotal() {
    setTotal(total + 1);
}

 ///variation 3----------------------------
  // useEffect(()=>{
  //   alert("i will run every time count is updated"); 
  // },[count])


 ///variation 4----------------------------
  // useEffect(()=>{
  // alert("i will run every time count ans total is updated");
  // },[count,total])

   ///variation 5 (clean up)----------------------------
  useEffect(()=>{
  alert("count updated");
  return() => {
    alert("count is unmounted from UI");
  }
  },[count])

  return (
   <div>
    <button onClick={handleClick}>
      click me
    </button>
    <br />
    count is : {count};

     <br />

     <button onClick={handleTotal}>
      click for total
    </button>
    <br />
    total is : {total};
   </div>
  )
}

export default App
