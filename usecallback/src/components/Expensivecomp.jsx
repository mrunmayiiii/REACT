import React, { useCallback, useState } from 'react'

const Expensivecomp = () => {
    const [count,setCount]=useState(0);
    const [text,setText]=useState("");

    const expensiveCal=useCallback(()=>{
        console.log("Running expensive calculation");
        let result=0;
        for(let i=0;i<1000000000;i++){
            result+=i;
        }
        return result;
    },[count]);
  return (
    <div>
        <input type="text"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder='Type SOmething' />
        <p>Expensive calc: {expensiveCal()}</p>
        <button onClick={()=>setCount(count+1)}>Increment Count</button>
    </div>
  )
}

export default Expensivecomp