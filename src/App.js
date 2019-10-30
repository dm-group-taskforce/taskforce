import React from 'react';
import routes from './route'
import NavHolder from './Components/NavHolder'
import SignedInNav from './Components/SignedInNav/SignedInNav';
import './reset.css'
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
