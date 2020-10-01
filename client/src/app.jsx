import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ProductOverview from './components/ProductOverview.jsx';
import exampleData from './data/exampleData.js';
import GlobalStyle from './globalStyle/createGlobalStyle.jsx'
import Sidebar from './components/Sidebar.jsx'

const Module = styled.div`
  position: absolute;
  right: 0;
  width: 33%;
`;

const Pane = styled.div`
  position: fixed;
  left: 0;
  background-color: rgba(0, 0, 0, 0.15);
  height: 100vh;
  width: 100vw;
`;

const App = () => {

const [data, setData] = useState(exampleData)
const [sidebarClicked, setSidebarClicked] = useState(false);

  return (
    <Module>
      {sidebarClicked && <Pane onClick={() => setSidebarClicked(false)} />}
      <Sidebar sidebarClicked={sidebarClicked} setSidebarClicked={setSidebarClicked}/>
      <GlobalStyle />
      <ProductOverview data={data} setSidebarClicked={setSidebarClicked}/>
    </Module>
  )
};

ReactDOM.render(<App />, document.getElementById("app"));