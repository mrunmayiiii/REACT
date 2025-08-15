import UserCard from "./components/usercard"
function App() {
  
//image sent as {} after importing
//style can also be sent for each card using prop
  return (
      <div className="container">
        <UserCard name="mrunmai" desc="hiii"/>
        <UserCard name="sham" desc="heloo"/>
        <UserCard name="kulkarni" desc="heyyy"/>
      </div>
  )
}

export default App
