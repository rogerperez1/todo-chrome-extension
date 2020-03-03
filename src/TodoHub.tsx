import React from "react";
import "./TodoHub.css";
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
        <Segment className="todo-today">
          <Header as="h2" floated="right">
            Floated Content
          </Header>
          <Form>
            <Form.Input
              icon="user"
              iconPosition="left"
              label="Username"
              placeholder="Username"
              className="todo-input"
            />

            <Button content="Login" primary />
          </Form>
          <div>
            <Button content="Sign up" icon="signup" size="big" />
          </div>
        </Segment>
      </div>
    );
  }
}

export default TodoHub;
