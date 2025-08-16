
import './App.css'


//////event handling can be done on anything

function App() {
 function handleClick(){
  alert("i am Clicked");
 }
 function handleMouseover(){
  alert("So u are actually dumb, huh?");
 }
  function handleInput(e){
    console.log("value changed",e.target.value);

  }
  function handleSubmit(e){
    e.preventDefault();
    ////preventing default like refresh
    ////wriing custom behavior
    alert("should  I submit the form?");

  }
  return (
  //  <div>
  //   <p onMouseOver={handleMouseover} style={{border:"2px solid black", padding:"10px", width:"fit-content"}}>
  //     you are dumb
  //   </p>
  //  <button onClick={handleClick}>
  //   click me
  //  </button>
  //  </div>

  // <div>
  //   <form onSubmit={handleSubmit}>
  //     <input type="text" onChange={handleInput} />
  //     <button type='submit'>submit</button>
  //   </form>
  // </div>

  <div>
    {/* this is immediate invokation never do it---<button onClick={alert("button clicked")}></button> */}
    <button onClick={()=>alert("button clicked")}> 
      
      click me
    </button>
  </div>
  )
}

export default App
