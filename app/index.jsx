import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}


ReactDOM.render(
  <div>Hello world from ReactJS</div>,
  document.getElementById('app')
);
