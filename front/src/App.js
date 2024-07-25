import React, { useMemo, useState } from 'react'
import './App.css'
const App = () => {

  const [height, setHeight] = useState(100);
  const [weight, setWeight] = useState(40);
  function onHeightChange(event){
    setHeight(event.target.value)
  }
  function onWeightChange(event){
    setWeight(event.target.value)
  }
  const output = useMemo(()=>{
 const calculateHeight =height/100;
 return(weight/(calculateHeight*calculateHeight)).toFixed(1)
  },[weight ,height]);

  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className='input-section'>
        <p className='slider-output'>Height:{height}cm</p>
      <input className='input-slider' 
      type='range'
      step='1'
      min='140'
      max='200'
      onChange={onHeightChange}
      />
      <p className='slider-output'>Weight:{weight}kg</p>
      <input className='input-slider'
      type='range'
      step='1'
      min='40'
      max='200'
      onChange={onWeightChange}
      />
      </div>
      <div className='output-section'>
        <p>YOUR BMI IS:</p>
       <p className='output'>{output}</p>
      </div>
    </main>
  )
}

export default App
