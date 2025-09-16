import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import Card2 from './components/Card2'
import Example2 from './components/Example2'


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


  return (
    <>
    <Navbar/>
    
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
