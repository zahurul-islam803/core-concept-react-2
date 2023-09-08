import { useState } from "react"

export default function Team(){
  const [count, setCount] = useState(11);
  function handleAdd (){
    const newCount = count + 1;
    setCount(newCount);
  }
  function handleRemove (){
    const newCount = count - 1;
    setCount(newCount);
  }
  return (
    <div style={{border: '1px solid purple', borderRadius: '15px'}}>
      <h3>Players: {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  )
}