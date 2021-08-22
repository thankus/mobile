import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import VirtualList from './VirtualList'
import Xss from './Xss'
import NewMap from './NewMap'
import Pulltorefresh from './Pulltorefresh1'

ReactDOM.render(
  <React.StrictMode>
    <Pulltorefresh />
  </React.StrictMode>,
  document.getElementById('root')
);
