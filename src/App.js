import React from 'react';
import routes from './route'
import NavHolder from './Components/NavHolder'
import './App.css';

function App() {
  return (
    <div className="App">

      <NavHolder/>
      {routes}
    </div>
  );
}

export default App;
