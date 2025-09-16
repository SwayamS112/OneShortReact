import React from 'react'

const Example = (props) => {
    console.log(props);
    console.log(props.user);
    
  return (
    <div>
      <div className='text-4xl bg-green-500'>Example page </div>
      <div className='text-4xl bg-green-500'>
        this username is {props.user}
        </div>
    </div>
  )
}

export default Example
