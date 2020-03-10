import React from "react";
import "./TodoHub.scss";
import {
  Segment,
  Header,
  Icon,
  Button,
  Grid,
  Divider,
  Form
} from "semantic-ui-react";
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
        <Segment className="main-segment">
          <Header>Today</Header>
          <Form className="flex-row">
            <Form.Input
              iconPosition="left"
              placeholder="Username"
              className="todo-input"
            />

            <Form.Button content="Login" primary />
          </Form>
        </Segment>
      </div>
    );
  }
}

export default TodoHub;
