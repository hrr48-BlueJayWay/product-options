import React from 'react';
import ReactDOM from 'react-dom';
import data from './data/exampleData.js';
console.log(data);
const App = () => {
  console.log(data);
  return (
    <div>
      <h1>Bergpalm</h1>
      <p>This is an item description about the pillows etc.</p>
    </div>

  )
};

ReactDOM.render(<App />, document.getElementById("app"));