import React from "react";
import "./App.css";
import { Segment, Header, Icon, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <Segment className="todo-section">
      Pellentesque habitant morbi tristique senectus.
      <Header icon>
        <Icon name="file pdf outline" />
        No documents are listed for this customer.
      </Header>
      <Button primary>Add Document</Button>
    </Segment>
  );
}

export default App;
