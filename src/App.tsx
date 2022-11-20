import React from 'react';
import Control from "./components/control";
import Messages from "./components/messages";
import {Card} from "react-bootstrap";

const App = () => {
  return (
    <Card>
      <Messages />
      <Control />
    </Card>
  );
};

export default App;