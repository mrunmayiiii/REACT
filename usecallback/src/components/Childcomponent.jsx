import React from 'react'

////wrappedin react memo then only change if props change else not
//// if functin sent not able to  not re render

const Childcomponent =React.memo(
     (props) => {
    console.log("child component rendered");
  return (
    <div>
        <button onClick={props.handleClick}>
            {props.buttonName}
        </button>
    </div>
  )
}
)

export default Childcomponent