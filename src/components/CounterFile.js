import React, { useState } from 'react'

export default function CounterFile() {
    const [counter,setCounter] = useState(3);
    const onAdd1Click = () => {
        setCounter(counter + 1);
      }
  return (
    <div>
    <h2 className='text-danger'>Counter: {counter}</h2>
    <button onClick={onAdd1Click}>Add 1</button>
    <button onClick={()=>{
        setCounter(counter-1);
    }}
>reduce 1 </button>
    </div>
  )
}
