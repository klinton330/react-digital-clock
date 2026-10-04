import { useState,useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const [currentTime,setCurrentTime]= useState(new Date())

  // useEffect calls setInterval one time while component is mounting
  useEffect(()=>{
    const timer = setInterval(()=>{
      setCurrentTime(new Date());
    },1000)
    return ()=>clearInterval(timer);
  },[])

  const formatTimeWithLeadingZero=(num)=>{
   return num<10 ? `0${num}`: num
  }
  const formatHours=(hour)=>{
    return hour == 0 ?12:hour>12?hour-12:hour
  }

  const formatDate = (date)=>{
    const options = {weekday:"long",year:"numeric",month:"long",day:"numeric"}
    return date.toLocaleDateString(undefined,options)
  }
  return (
    <>
     <div className="digital-clock">
      <h1>Digital Clock</h1>
      <div className="time">
        {formatTimeWithLeadingZero(formatHours(currentTime.getHours()))}:
        {formatTimeWithLeadingZero(currentTime.getMinutes())}: 
        {formatTimeWithLeadingZero(currentTime.getSeconds())}
        {currentTime.getHours()>=12?" PM":" AM"}
      </div>
      <div className="date">{formatDate(currentTime)}</div>
     </div>
    </>
  )
}

export default App
