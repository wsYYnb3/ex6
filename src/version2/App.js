import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Line from './Line';

function App() {
  const [value, setValue] = useState(null);

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div className="app-container">
    <h1>Version 2 with hooks</h1>
      <Line value1="1" value2="2" onClick={handleClick} />
      <Line value1="2" value2="4" onClick={handleClick} />
      <Line value1="3" value2="6" onClick={handleClick} />
      <Line value1="4" value2="8" onClick={handleClick} />
      <Line value1="5" value2="10" onClick={handleClick} />
      <Line value1="6" value2="12" onClick={handleClick} />
      {value && (
        <div className="result-container">
          <p>{`You've clicked ${value}`}</p>
        </div>
      )}
    </div>
  );
}

export default App;
