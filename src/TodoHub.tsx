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
import { todaysDate, currentTime, currentDate } from "./Helpers/utilities";

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
        <Segment className="mt-5 main-segment">
          <Header className="flex-col">
            <span>Today </span>
            <span>{todaysDate()}</span>
            <span>{currentTime()}</span>
          </Header>
          <Form className="flex-row">
            <Form.Input
              iconPosition="left"
              placeholder="add todo item"
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
