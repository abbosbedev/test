import './App.css';
import { Provider } from 'react';
import Parent from './Parent';
import { useState } from 'react';
import someContext from './CreateContect';
function App() {
  const [count,setCount]=useState(0)
  const incrment=()=>setCount(count+1)
  return (
    <someContext.Provider value={{incrment:incrment,count:count}}>
      <div className="App">
        <h1>App <span>{count}</span></h1>
        <button onClick={incrment}>counter</button>

        <Parent incrment={incrment} count={count} />
      </div>
    </someContext.Provider>
  );
}

export default App;
