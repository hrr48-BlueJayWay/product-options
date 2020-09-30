import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ProductOverview from './components/ProductOverview.jsx';

import exampleData from './data/exampleData.js';

const App = () => {
console.log(exampleData);
const [data, setData] = useState(exampleData)

  return (
    <div>
      <ProductOverview data={data} />
    </div>

  )
};

ReactDOM.render(<App />, document.getElementById("app"));