import './App.css';
import { useEffect, useState } from 'react';
import { Header, Button, StockUI } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <StockUI />
    </div>
  );
}

export default App;