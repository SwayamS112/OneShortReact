import React from 'react'

const Card2 = (props) => {
  return (
    <div className='mr-7 bg-white inline-block p-6 text-center rounded'>
      <img className="ml-8 h-32 w-32 rounded-full mb-3" src={props.photo} alt="profile_Photo" />
      <h1 className='text-2xl font-semibold mb-4'>Username is {props.username} </h1>
      <h2>City: {props.city}</h2>
        <h2> age: {props.age}</h2>
      <button className='mt-4 bg-emerald-500 text-white px-4 py-2 rounded font-medium'>Add friend</button>
    </div>
  )
}

export default Card2
