import React, { useState } from 'react'

const Basic = () => {
let user = "Swayam"
const age = 20

function abc(){
  console.log("hello");
}

function username(){
  user = "Swayam Sod"
}

// in below given code means 
// a = 10 and setA = change-able variable 
const [a , setA] = useState(10)
const changeA = ()=>{
  setA(20);
}
  return (
    <>
    <h1>HELLO {user} {age}</h1> 
    <h1>The number is {a}</h1>
    
    {/* If i use abc() it will automatically show hello in console so i didnt add brackets */}
    <button onClick={abc}>Say Hello in Log</button> <br />
    
    <button onClick={changeA}>Change the number</button> <br />
    
    <button onClick={function(){
      setA(a+10)
    }}>Increase</button><br />
    
    <button onClick={()=>setA(a-10)}>Decrease</button>
    </>
  )
}

export default Basic