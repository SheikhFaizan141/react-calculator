import './App.css';

const Display = () => {
  return (
    <div id='display'>
      <div className="equation-diplay">0</div>
      <div className="main-display">0</div>
    </div>
  )
}

const KeyPad = () => {
  return (
    <div id='key-pad'>
      <div>AC</div>
      <div>/</div>
      <div>x</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>=</div>
      <div>0</div>
      <div>.</div>
    </div>
  )
}

function App() {
  return (
    <div className='container'>
      <div className="cal-body">
        <Display />
        <KeyPad />
      </div>
    </div>
  );
}

export default App;
