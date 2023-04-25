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
      <div>NAVBAR</div>

      {/* OMC Container */}
      {Component(type, { ...props })}

      <div>FOOTER</div>
    </div>
  );
}

export default App;
