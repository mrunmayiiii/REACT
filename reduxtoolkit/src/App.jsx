import { useDispatch , useSelector} from 'react-redux'
import { useState } from 'react' 
import './App.css'
import { decrement, increment , reset , incrementByAmount } from './features/counter/counterSlice';


function App() {
  const [amt,setAmount]=useState(0);
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();
  function handleIncrementClick() {
    dispatch(increment());
  }
  function handleDecrementClick() {
    dispatch(decrement());

  }
  function handleResetClick() {
    dispatch(reset());

  }
 function handleIncAmountClick() {
  dispatch(incrementByAmount(amt));
 }

  return (
   <div className='container'>
    
    <button onClick={handleIncrementClick}>+</button>
    <p>Count: {count}</p>
    <button onClick={handleDecrementClick}>- </button>
    <br />
    <button onClick={handleResetClick}>reset</button>
    <input type="Number"
    value={amt}
    placeholder='Enter amt' 
    onChange={(e)=>setAmount(e.target.value)}/>
    <br />
    <button onClick={handleIncAmountClick}>Inc by Amount</button>
   
   </div>
  )
}

export default App
