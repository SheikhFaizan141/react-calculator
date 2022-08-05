import { useState } from 'react';
import './App.css';

const Display = ({ input, expression }) => {
  return (
    <div id='cont-display'>
      <div className="equation-diplay">{expression}</div>
      <div id="display">{input}</div>
    </div>
  )
}


const KeyPad = ({ onClick, onEqual, onclear }) => {
  return (
    <div className='keys'>
      <button
        onClick={onclear}
        className='clear'
        id='clear'
        value='AC'>
        AC
      </button>
      <button
        onClick={onClick}
        id='divide'
        value='/'>
        ÷
      </button>
      <button
        onClick={onClick}
        id='multiply'
        value='*'
      >
        x
      </button>
      <button
        onClick={onClick}
        id='seven'
        value='7'
      >
        7
      </button>
      <button
        onClick={onClick}
        id='eight'
        value='8'
      >
        8
      </button>
      <button
        onClick={onClick}
        id='nine'
        value='9'
      >
        9
      </button>
      <button
        onClick={onClick}
        id='subtract'
        value='-'
      >
        -
      </button>
      <button
        onClick={onClick}
        id='four'
        value='4'
      >
        4
      </button>
      <button
        onClick={onClick}
        id='five'
        value='5'
      >
        5
      </button>
      <button
        onClick={onClick}
        id='six'
        value='6'
      >
        6
      </button>
      <button
        onClick={onClick}
        id='add'
        value='+'
      >
        +
      </button>
      <button
        onClick={onClick}
        id='one'
        value='1'
      >
        1
      </button>
      <button
        onClick={onClick}
        id='two'
        value='2'
      >
        2
      </button>
      <button
        onClick={onClick}
        id='three'
        value='3'
      >
        3
      </button>
      <button
        onClick={onEqual}
        id='equals'
        value='equals'
      >
        =
      </button>
      <button
        onClick={onClick}
        id='zero'
        value='0'
      >
        0
      </button>
      <button
        onClick={onClick}
        id='decimal'
        value='.'
      >
        .
      </button>
    </div>
  )
}

function App() {
  const [input, setInput] = useState('0')
  const [expression, setExpression] = useState(String.fromCharCode(160))

  const handleEqual = (e) => {
    console.log(e)
    setExpression(eval(input))
  }

  const handleClick = (e) => {
    console.log(e.target.value)
    console.log(input.indexOf('0') === 0)
    if (e.target.value !== '.' && input.indexOf('0') === 0) {
      setInput(e.target.value)
    } else {
      setInput((prevState) => {
        return `${prevState}${e.target.value}`
      })
    }
  }

  const handleclear = () => {
    console.log('clear')
    setInput('0')
    setExpression(String.fromCharCode(160))
  }

  return (
    <div className='container'>
      <div className="cal-body">
        <Display
          input={input}
          expression={expression}
        />
        <KeyPad
          onClick={handleClick}
          onclear={handleclear}
          onEqual={handleEqual}
        />
      </div>
    </div>
  );
}

export default App;
