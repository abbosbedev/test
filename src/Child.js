import React from 'react'
import GrandChild from './grandChild'
import './App.css';

function Child({incrment,count}) {
  return (
    <div className='Child'>
      <h1>Child</h1>
      <GrandChild incrment={incrment} count={count}/>
    </div>
  )
}

export default Child
