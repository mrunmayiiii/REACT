import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate();
    function handleClick(){
        navigate('/about'); // Navigates to the About page
    }
  return (
    <div>
        Homepage
        <button onClick={handleClick}>
            move to aboutpage
        </button>
    </div>
  )
}

export default Home