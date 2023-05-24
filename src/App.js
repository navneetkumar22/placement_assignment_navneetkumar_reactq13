// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('');

  const calcResult = () => {
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult('Error')
    }
  }

  const clearResult = () => {
    setResult('');
  }


  return (
    <div className="App">
      <h1>Calculator App</h1>

      <div className='calc'>
        <h3>{result}</h3>

        <div className='buttons'>
          <div>
            <button onClick={clearResult}>C</button>
            <button onClick={(e) => setResult(result + e.target.value)} value='/'>/</button>
          </div>
          <div>
            <button onClick={(e) => setResult(result + e.target.value)} value='9'>9</button>
            <button onClick={(e) => setResult(result + e.target.value)} value='8'>8</button>
            <button onClick={(e) => setResult(result + e.target.value)} value='7'>7</button>
            <button onClick={(e) => setResult(result + e.target.value)} value='*'>*</button>
          </div>
          <div>
            <button onClick={(e) => setResult(result + e.target.value)} value='6'>6</button>
            <button onClick={(e) => setResult(result + e.target.value)} value='5'>5</button>
            <button onClick={(e) => setResult(result + e.target.value)} value='4'>4</button>
            <button onClick={(e) => setResult(result + e.target.value)} value='-'>-</button>
          </div>
          <div>
            <button onClick={(e) => setResult(result + e.target.value)} value='3'>3</button>
            <button onClick={(e) => setResult(result + e.target.value)} value='2'>2</button>
            <button onClick={(e) => setResult(result + e.target.value)} value='1'>1</button>
            <button onClick={(e) => setResult(result + e.target.value)} value='+'>+</button>
          </div>
          <div>
            <button onClick={(e) => setResult(result + e.target.value)} value='0'>0</button>
            <button onClick={(e) => setResult(result + e.target.value)} value='.'>.</button>
            <button onClick={calcResult}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
