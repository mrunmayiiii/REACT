import React from 'react'

///changes in children are reflected in parent
const Card = (props) => {
  return (
    <div>
        
        <input type="text" onChange={(e)=>props.setName(e.currentTarget.value)}/>
        <p>name ----- {props.name}</p>
    </div>
  )
}

export default Card