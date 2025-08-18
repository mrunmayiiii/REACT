import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App.jsx'

const childC = () => {
    //const user=useContext(UserContext);
    const {theme,setTheme}=useContext(ThemeContext); 
    function handleClick(){
        if(theme==="light"){
            setTheme("dark");
        }
        else{
            setTheme("light");
        }
    }
  return (
    <div>
        <button onClick={handleClick}>
            Change Theme
        </button>
    </div>
  )
}

export default childC 