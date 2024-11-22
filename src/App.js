import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Result from './result';
const secnum=Math.floor(Math.random()*10)+1

function App() {
  const [term,setterm]=useState('')
  const handlechange=(e)=>{
    setterm(e.target.value)
  }
  return (
    <div className="container">
      <div className='head'>
        <lable htmlfor='term' >Guess the number between 1 to 10 </lable> <br/>
      </div>
        <input type='text' name='text' id='term' onChange={handlechange} />
        <Result secnum={secnum } term={term}/>
    </div>
    
  );
}

export default App;