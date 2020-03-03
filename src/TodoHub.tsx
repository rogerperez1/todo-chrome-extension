import React from "react";
import "./App.css";
import { Segment, Header, Icon, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

interface IHubProps {}
interface IHubState {}

class TodoHub extends React.Component<IHubProps, IHubState> {
  constructor(props: IHubState) {
    super(props);
    this.state = {};
  }

  public async componentDidMount() {}

  public render(): JSX.Element {
    return (
      <div className="main">
        <Segment className="todo-today">
          Pellentesque habitant morbi tristique senectus.
          <Header icon>
            <Icon name="file pdf outline" />
            No documents are listed for this customer.
          </Header>
          <Button primary>Add Document</Button>
        </Segment>
      </div>
    );
  }
}

export default TodoHub;
