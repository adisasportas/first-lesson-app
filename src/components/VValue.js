import React, { useRef, useState } from 'react'

export default function VValue() {
    const [inpName,setInpName] = useState("");
    const phoneRef=useRef();

    const onSub = (e) => {
      // מונע את הברירת מחדל של שיגור שיעשה ריטסטר לאפליקציה
      e.preventDefault()
      alert(inpName);
      alert(phoneRef.current.value);
    }
    
    return (
      <div>
        <h1>Order form</h1>
        <form onSubmit={onSub} className='col-md-6'>
          <label>Name:</label>
          <input onChange={(e) => setInpName(e.currentTarget.value)} type="text" className='form-control'/>
          <label>Phone:</label>
          <input ref={phoneRef} type="text" className='form-control'/>
          <button className='btn btn-info mt-4'>Add</button>
        </form>
      </div>
    )
}
