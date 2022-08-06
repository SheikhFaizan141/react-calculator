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
        onClick={onClick}
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
  const [operator, setOperator] = useState('')
  const [input, setInput] = useState('0')
  const [expression, setExpression] = useState(String.fromCharCode(160))

  const handleClick = (e) => {

    switch (e.target.value) {
      case '.':
        if (input.indexOf('.') === -1) {
          console.log('ee')
          setInput((prevState) => {
            return prevState + '' + e.target.value;
          })
          setExpression(prevState => prevState + '' + e.target.value)
        }
        break;
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':

        if (/[\/\-*+]/.test(input)) {
          setInput(String.fromCharCode(160))
        }

        if (e.target.value === '0' && expression.length === 0) {
          setExpression(prevState => prevState + '' + e.target.value)

        } else {
          setInput((prevState) => {
            return prevState.indexOf('0') === 0 && prevState.indexOf('.') === -1 ? e.target.value : prevState + '' + e.target.value;
          })

          setExpression(prevState => prevState + e.target.value)
        }

        break
      case '/':
      case '*':
      case '+':
      // case '-':

        let regEx = /[\/*+]/.test(expression[expression.length - 1])
        if (!regEx) {
          setInput(e.target.value)
          // setOperator(e.target.value)
          setExpression(prevState => prevState + '' + e.target.value)
        } else if (expression[expression.length - 1] !== e.target.value) {
          setInput(e.target.value)
          // setOperator(e.target.value)
          setExpression(prevState => prevState.replace(expression.ind, e.target.value))
        }
        break;

      case '-':
         setInput(e.target.value)
        setExpression(prevState => prevState + '' + e.target.value)
        break;
      case 'equals':

        setExpression(eval(expression))

        setInput(eval(expression))
        break;
      default:
        break;
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
        />
      </div>
    </div>
  );
}

export default App;
