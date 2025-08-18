
import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA.jsx'

///step 1: create context
//const UserContext = createContext();

///step 2: wrap all children inside provider
///step 3: passs value
///step 3: consume inside consumer

const ThemeContext = createContext();

 function App() {
 ////prop driling
 ///////create context
 ///////provide context
 ///////consume context

// const [user,setUser]=useState({name:"mrunmai"});
const [theme, setTheme] = useState("light");

  return (

    // <UserContext.Provider value={user}>
    //    <ChildA/>
    // </UserContext.Provider>
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div id='container' style={{backgroundColor: theme === "light" ? "blue" : "red"}}>
        <ChildA/>
      </div>
    
    </ThemeContext.Provider>

   
  )
}

export default App
export { ThemeContext };
