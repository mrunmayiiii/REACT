import React from 'react'
import { useNavigate } from 'react-router-dom'
const About = () => {
    const navigate=useNavigate();
    function handleClick(){
        navigate('/about'); // Navigates to the About page
    }
  return (
    <div>About Page
        <button onClick={handleClick}>
            move to dashboard
        </button>
    </div>
  )
}

export default About