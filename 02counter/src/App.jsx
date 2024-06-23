import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter]= useState(15);
  
  const addValue=()=>{
    console.log("clicked",counter);
  // counter=counter+1;
  if(counter<19){

  
   setCounter(counter++);
  }else{
    setCounter(counter=20);
  }
  }
  const removeValue=()=>{
    if(counter>=0){

    
    setCounter(counter--);
    }else{
      setCounter(counter=0)
    }
  }
  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value:{counter}</h2>
     <button onClick={addValue}>
      Add Value:{counter}</button>
     <br/>
     <button onClick={removeValue}>Remove value:{counter}</button>
    </>
  )
}

export default App
