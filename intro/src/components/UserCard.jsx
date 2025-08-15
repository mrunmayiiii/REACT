import React from 'react'

import './UserCard.css'
// return html like code
//not class but className
//name should be camelcasing
//for different data in each card --props
//jsxx===html+js syntax
const UserCard = (props) => {
  return (
   <div className='user-container'>
    <p id='usertitle'>{props.name}</p>
   <img id='user-img' src="" alt="Alternative text" />
    <p id='user-desc'>{props.desc}</p>
   </div>
  )
}

export default UserCard