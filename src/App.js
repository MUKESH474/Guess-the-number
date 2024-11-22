import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className='head'>
        <lable htmlfor='term' >Guess the number from 1 to 10</lable> <br/>
        <input type='text' name='text' id='term' />
      </div>
    </div>
  );
}

export default App;
