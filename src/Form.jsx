// This Was Two Way Binding

import React, { useState } from 'react'

const Form = () => {

const [username, setUsername] = useState("")
const submitHandler = (e)=>{
       e.preventDefault() //to prevent those auto reload 
    console.log("Submitted");
    console.log(username);
    setUsername('') //after clicked submit it will clear the input field
}
  return (
    <div>
      <form onSubmit={(e)=> // e means the event healding
    {
       submitHandler(e)
    }}>
        
        <input className="px-4 py-3 rounded-2xl text-xl m-5 bg-amber-50" 
        value={username}
        onChange={(e)=>{
        setUsername(e.target.value)
        }}
        type="text"
        placeholder='Enter your name'/>
        
        <button className='px-4 py-3 m-5 text-2xl font-semibold bg-emerald-600'>
        Submit
        </button>
      </form>
    </div>
  )
}

export default Form
