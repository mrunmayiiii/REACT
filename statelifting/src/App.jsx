import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

////here app component is my parent component
///and card is my child component

function App() {
  ///for state lifting sending data from child to parent
  ////create state 
  ////manage state 
  ////change state
  ////sync changes to all states

const [name,setName]=useState('');

  return (
    <div>
      {/* /////here parent is sending the data */}
    <Card title="card1" name={name} setName={setName}/>
    <Card title="card2" name={name} setName={setName}/>
    </div>
  )    
}

export default App
