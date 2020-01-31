import React from 'react';
import './App.css'

const App = ({ name = 'world' }) => (
  <h1>
    hello, {name}
  </h1>
)

export default App;
