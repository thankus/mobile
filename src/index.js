import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import VirtualList from './VirtualList'
import Xss from './Xss'
import NewMap from './NewMap'

ReactDOM.render(
  <React.StrictMode>
    <NewMap />
  </React.StrictMode>,
  document.getElementById('root')
);
