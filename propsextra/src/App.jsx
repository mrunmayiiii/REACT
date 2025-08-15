import { useState } from 'react';
import './App.css'
import Card from './components/Card'
import Button from './components/Button'
function App() {

const [count,setCount]=useState(0);

function handleClick(){
  setCount(count+1);
}
  return (
  <div >

  <Button handleClick={handleClick}
  text="click me">
    <h1>{count}</h1>
  </Button>

  {/* <Card name="mrunmai">

  all the content between component tag is children

    <h1>trying to be consistent</h1>
    <p>hate development</p>
    <p>will complete soon</p>

  </Card>
  <Card children="this is a children">
    helloooo
  </Card> */}



  </div>
  )
}

export default App
