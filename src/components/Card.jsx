import React from 'react'

const Card = (props) => {
    console.log(props); // this will print full object
    console.log(props.user); // this will print only the value
    
    
  return (
    <div>
      <h1 className='bg-amber-300 text-3xl'>UserName is {props.user} </h1>
    </div>
  )
}

export default Card