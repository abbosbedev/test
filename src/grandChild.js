import React from 'react'
import './App.css';
import { useContext } from 'react';
import someContext from './CreateContect';

function GrandChild() {
    const tek=useContext(someContext)
    console.log(tek)
  return (
    <div className='grandChild'>
      <h1>GrandChild<span>{tek.count}</span></h1>
      <button onClick={tek.incrment}>counter2</button>
      
    </div>
  )
}

export default GrandChild
