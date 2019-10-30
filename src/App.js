import React from 'react';
import routes from './route'
import SignedInNav from './Components/SignedInNav/SignedInNav';
import './reset.css'
import './App.css';

function App() {
  return (
    <div className="App">

      <SignedInNav/>
      {routes}
    </div>
  );
}

export default App;
