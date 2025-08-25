
import { useCallback, useState } from 'react'
import './App.css'
import Childcomponent from './components/Childcomponent'
import Expensivecomp from './components/Expensivecomp'
function App() {
//  const[count,setCount]=useState(0);

  // function handleClick(){
  //   setCount(count+1);
  // }

  // const handleClick=useCallback(()=>{
  //   setCount(count+1);
  // },[count])

  return (
    // <div>
    //   <div>count: {count}</div>
    //   <div>
    //     <button onClick={handleClick}>Increment</button>
    //   </div>
    //   <br /> <br/>
    //   <div>
    //     <Childcomponent buttonName="clickk22"
    //     handleClick={handleClick}
    //     />
    //   </div>
    // </div>
    <div>
      <Expensivecomp/>
    </div>
  )
}

export default App
