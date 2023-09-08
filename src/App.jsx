// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Friends from '../Friends';
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';

function App() {

  function handleClick(){
    alert('button click');
  }
  const handleClick2 = ()=>{
    alert('click 2');
  }

  const paraFour =(num)=>{
    alert(num + 2);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>

      <Users></Users>
      <Friends></Friends>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>
      <button onClick={()=>{alert('click 3')}}>Click Me3</button>
      <button onClick={()=> paraFour(5)}>click me 4</button>

      <Counter></Counter>
      <Team></Team>
    
      
    </>
  )
}

export default App
