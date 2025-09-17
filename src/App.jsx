import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import Card2 from './components/Card2'
import Example2 from './components/Example2'
import axios from 'axios'


const App = () => {

  const user = "From App page"
const num = 10

const user2 = [
  {
    "username": "rahul_23",
    "city": "Delhi",
    "age": 23,
    "profession": "Software Engineer",
    "profile_photo": "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    "username": "ananya_k",
    "city": "Mumbai",
    "age": 27,
    "profession": "Graphic Designer",
    "profile_photo": "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    "username": "arjun99",
    "city": "Bengaluru",
    "age": 25,
    "profession": "Data Analyst",
    "profile_photo": "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    "username": "priya_singh",
    "city": "Kolkata",
    "age": 29,
    "profession": "Content Writer",
    "profile_photo": "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    "username": "vikram07",
    "city": "Chennai",
    "age": 31,
    "profession": "Doctor",
    "profile_photo": "https://randomuser.me/api/portraits/men/19.jpg"
  }
]

// For API EXAMPLE

const [data , setdata] = useState([])
const [data2 , setdata2] = useState([])


//// it take time so it is a asyncronious function 
// so we used the async and await 
 const getData =async () => {
  const response =await axios.get('https://picsum.photos/v2/list?page=2&limit=5') 
  setdata(response.data)
  }

  // using USE-EFFECTS
 const getData2 = async () => {
  const response2 = await axios.get('https://picsum.photos/v2/list?page=3&limit=5');
  setdata2(response2.data); 
};

useEffect(()=>{
  getData2()
},[])


  return (
    <>
    <Navbar/>
    
    {/* API CALLING USING AXIOS */}
     <div className='p-10'>
  <button onClick={getData}
     className='bg-teal-700 active:scale-90 text-white font-semibold text-3xl px-6 py-3 rounded'>
      Get data using axios from API from loren picsum
  </button> 
   <div className='p-5 bg-gray-950 mt-5 text-amber-50'>
    {data.map(function(elem,idx){
      return <div key={idx} className='bg-gray-700 text-red-400 flex items-center justify-between w-full px-7 py-6 mb-3 rounded'>
           <img className='h-30' src={elem.download_url} alt="" />
           <h1>{elem.author}</h1>
      </div>
    })}

    {/* data 2 will automatically fun as i usd use effect */}
    {data2.map(function(elem,idx){
      return <div key={idx} className='bg-teal-200 text-red-400 flex items-center justify-between w-full px-7 py-6 mb-3 rounded'>
           <img className='h-30' src={elem.download_url} alt="" />
           <h1>{elem.author}</h1>
      </div>
    })}
  </div>    
  </div>

    
    {/* Prop drilling passing props  */}
    <Card user = {user}/> 
    <Card user = "App page"/>
    
    {/* <div className='p-10 '>
      <Card2 user="Swayam" age="20" city="Sujanpur"/>
     </div> */}
    
    <div className='p-10'>
      {user2.map(function(elem,idx){
        return <Card2 key={idx}
                      username={elem.username} 
                      age={elem.age} 
                      city={elem.city} 
                      photo={elem.profile_photo} 
                      profession={elem.profession}
              />
      })}
    </div>
    
      <Example2/>


    <Footer/>
    </>
  )
}

export default App
