import React from 'react';
import routes from './route'
import Navbar from './Components/NavBar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {routes}
    </div>
  );
}

export default App;
