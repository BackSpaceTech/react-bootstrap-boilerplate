import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

const buttonsInstance = (
  <ButtonToolbar>
    {/* Standard button */}
    <Button>Default</Button>
    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
    <Button bsStyle="primary">Primary</Button>
    {/* Indicates a successful or positive action */}
    <Button bsStyle="success">Success</Button>
    {/* Contextual button for informational alert messages */}
    <Button bsStyle="info">Info</Button>
    {/* Indicates caution should be taken with this action */}
    <Button bsStyle="warning">Warning</Button>
    {/* Indicates a dangerous or potentially negative action */}
    <Button bsStyle="danger">Danger</Button>
    {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
    <Button bsStyle="link">Link</Button>
  </ButtonToolbar>
);

ReactDOM.render(
  buttonsInstance,
  document.getElementById('app')
);
