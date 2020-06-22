import React from 'react';
import Potato from "./Potato";
import { Button } from '@material-ui/core';



function App() {
  return (
    <div className="App">
      Hello
      <Potato />
      <Button color="primary">버튼</Button>
    </div>
  );
}

export default App;
