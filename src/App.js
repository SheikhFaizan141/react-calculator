import { useState } from 'react';
import './App.css';

const Display = ({ input, expression }) => {
  return (
    <div className='screen'>
      <div className="equation-diplay">{expression}</div>
      <div id="display" className='input-display'>{input}</div>
    </div>
  )
}


const KeyPad = ({ onClick }) => {
  return (
    <div className='keys'>
      <button
        onClick={onClick}
        className='clear'
        id='clear'
        value='ac'>
        AC
      </button>
      <button
        onClick={onClick}
        className='operator'
        id='divide'
        value='/'>
        ÷
      </button>
      <button
        onClick={onClick}
        className='operator'
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
        className='operator'
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
        className='operator'
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
      {/* <button
        onClick={onClick}
        id='c'
        value='c'
      >
        C
      </button> */}
    </div>
  )
}

function App() {
  const [input, setInput] = useState('0')
  const [expression, setExpression] = useState(String.fromCharCode(160))
  // const [expression, setExpression] = useState('2 + 1')

  const handleClick = (e) => {

    switch (e.target.value) {
      case '.':
        if (input.indexOf('.') === -1) {
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

        // resets
        if (/[/\-*+]/.test(input)) {
          setInput(String.fromCharCode(160))
        }
        // else if (expression.charAt()) {

        // }

        if (e.target.value === '0' && expression.length === 0) {
          setInput(e.target.value)
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
      case '-':

        const endsWithOperator = /[/*\-+]$/.test(expression)

        if (endsWithOperator) {

          if (e.target.value === '-') {
            if (expression.charAt(expression.length - 1) !== '-') {
              setInput(e.target.value)
              setExpression(prevState => prevState + '' + e.target.value)
            }
          } else {

            setInput(e.target.value)

            setExpression(prevState => prevState.replace(/[/*\-+]+$/, e.target.value))
          }

        } else {
          console.log('oo')
          setInput(e.target.value)
          setExpression(prevState => prevState + '' + e.target.value)
        }


        break;
      case 'equals':

        setExpression(eval(expression))
        setInput(eval(expression).toString())
        break;
      case 'ac':
        setInput('0')
        setExpression(String.fromCharCode(160))
        break;
      default:
        break;
    }
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
        />
      </div>
    </div>
  );
}

export default App;
