
import './App.css'
import { useState } from 'react';
import LoginBtn from './components/LoginBtn'
import Logout from './components/Logout' 
function App() {

////if-else
  ////ternary
    ////logical
      ////early return



 const[isLoggedin, setLoggedin]=useState(true);
//  if (isLoggedin) {
//     return <Logout />;
//   } else {
//     return <LoginBtn />;
//   }

return(
  <div>
  <h1>welcomeeee</h1>
  <div>
    {isLoggedin && <Logout/>}
  </div>
</div>
)


}

export default App
