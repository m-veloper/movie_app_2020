import React from 'react';
import Potato from "./Potato";
import { Button } from '@material-ui/core';

function Food({fav}) {
    return <h1>포테이토 좋아 {fav}</h1>
}

function App() {
  return (
    <div className="App">
      Hello
      <Food fav="kimchi"/>
      <Food fav="1"/>
      <Food fav="2"/>
      <Food fav="3"/>
      <Food fav="4"/>
    </div>
  );
}

export default App;
