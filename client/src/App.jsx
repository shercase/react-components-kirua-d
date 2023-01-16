import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  let shopping = ['pain', 'lait', 'fromage', 'houmous', 'nouilles'];
  return (
    shopping.map((shopping) => <li>{shopping}</li>));
}

export default App;
                 
                 lecture Sherley
