import React, { useEffect, useState } from 'react'
export default function ApiFoods() {
    const[food_arr,setFoodsArr]=useState([])
  // [] - מערך ריק אומר שיפעל בהתחלה
  useEffect(() => { 
    doApi();
  },[])
  const doApi = async() => {
    const url = "http://fs1.co.il/bus/foods.php";
    try{
    const resp = await fetch(url);
    const data = await resp.json();
    setFoodsArr(data);
    console.log(data);
  }
  catch(err){
    console.log(err);
    alert("there problem come back later");
  }
}
  return (
    <div className='container'>
    <h1>Foods menu:</h1>
    <ul>
    {food_arr.map(item => {
        return(
        <li key={item.name}>{item.name} - {item.price}</li>
        )
  })}
      
    </ul>
  </div>
)
}