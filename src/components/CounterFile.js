import React, { useState } from 'react'

export default function CounterFile() {
    const [counter,setCounter] = useState(3);
    const onAdd1Click = () => {
        setCounter(counter + 1);
      }
  return (
    <div>
    <h2>Counter: {counter}</h2>
    <button onClick={onAdd1Click}>Add 1</button>
    `</div>
  )
}
