import React, { SyntheticEvent } from "react";
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
import { todaysDate, currentTime } from "./Helpers/utilities";
import { Item, Items } from "./Interfaces";

interface IHubProps {}
interface IHubState {
  item?: string;
  items: string[];
}

class TodoHub extends React.Component<IHubProps, IHubState> {
  constructor(props: IHubState) {
    super(props);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.state = {
      items: []
    };
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
              name="input-item"
              onChange={this.handleItemChange}
            />

            <Form.Button
              content="Add"
              name="add-item"
              primary
              onClick={this.handleAdd}
            />
          </Form>
          <div id="list-items"></div>
        </Segment>
      </div>
    );
  }

  handleItemChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    this.setState({ item: e.target.value });
  }

  handleAdd(e: SyntheticEvent) {
    e.preventDefault();
    console.log(e);
    // debugger;
    const items: any = this.state.items.push(this.state.item!);
    this.setState({ items: items });
  }

  renderItems() {
    return this.state.items?.map(item => {
      return <div>1. {item}</div>;
    });
  }
}

export default TodoHub;
