import { useEffect } from 'react';
import './App.css';
import Component from './components';
import PAGE_ODP from './pages/ODP.json';


function App() {
  useEffect(() => {
    // Fetch data models for the Page
  }, []);

  const { type, ...props } = PAGE_ODP.layout[0];

  return (
    <div className="App">
      <div style={{ border: '3px solid black', top: 0, left: 0, right: 0, fontSize: 30 }}>NAVBAR</div>

      {/* OMC Container */}
      {Component(type, { ...props })}

    </div>
  );
}

export default App;
