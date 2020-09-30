import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ProductOverview from './components/ProductOverview.jsx';
import exampleData from './data/exampleData.js';
import GlobalStyle from './globalStyle/createGlobalStyle.jsx'


const App = () => {

const [data, setData] = useState(exampleData)

  return (
    <div>
      <GlobalStyle />
      <h1>test</h1>
      <ProductOverview data={data} />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById("app"));