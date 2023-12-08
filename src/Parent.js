import React from 'react'
import Child from './Child'
import './App.css';

function Parent({incrment,count}) {
  return (
    <div className='Parent'>
      <h1>child</h1>
      <Child incrment={incrment} count={count}/>
    </div>
  )
}

export default Parent
