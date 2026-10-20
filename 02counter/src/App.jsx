

import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter]=  useState(15)
  
  // let counter=5;
  const addValue = () => {
   
    setCounter(counter+1);
  }
  const removeValue =() => {
    setCounter(counter-1);
  }
  if(counter>20 ) {
    setCounter(counter=20)
  }else if(counter<0){
    setCounter(counter=0)
  }

  return (
 <>
 
    <  h1>Fun with Reactee</h1>
    <h2>Counter Value = {counter}</h2>
    <button onClick={addValue}>Add Value {counter}</button>
    <button onClick={removeValue}>Remove Value {counter}</button>
    <p> footer: {counter}</p>

 </>
  )
}

export default App
