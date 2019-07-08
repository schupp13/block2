import React from "react";
import "./App.css";
import Movie90 from './components/movie90s/Movie90'
//test123
//pull
function App() {
  return (
    <div className="App">
      <div className="logoDiv">
      <h1 className="company">BLOCK BUSTER</h1>
      <img className ="Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Blockbuster_logo.svg/2000px-Blockbuster_logo.svg.png" />
      </div>
      <Movie90 />
    </div>
  );
}

export default App;
