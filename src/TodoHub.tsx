import React, { FormEvent } from "react";
import "./TodoHub.scss";
import { Segment, Header, Button, Form, Input, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { todaysDate, currentTime, todaysDateAlt } from "./Helpers/utilities";
// import { Item, Items } from "./Interfaces";

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
      items: ["testOne"]
    };
  }

  public async componentDidMount() {}

  public render(): JSX.Element {
    return (
      <div className="main">
        <Segment className="mt-5 main-segment">
          <Header className="flex-col">
            <span>Today </span>
            <span>{todaysDateAlt()}</span>
            <span>{currentTime()}</span>
          </Header>
          <Form className="flex-row" onSubmit={this.handleAdd}>
            <Input
              id="addTodo"
              className="todo-input"
              name="addTodo"
              placeholder="add todo item"
              onChange={this.handleItemChange}
            />

            <Form.Button content="Add" name="add-item" primary />
          </Form>
          <List className="todo-items">{this.renderItems()}</List>
        </Segment>
      </div>
    );
  }

  handleItemChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    this.setState({ item: e.target.value });
  }

  handleAdd(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const items: any = this.state.items;
    try {
      this.setState({ items: [...items, this.state.item], item: "" });
      e.currentTarget.addTodo.value = "";
    } catch (err) {
      console.log(err);
    }
  }

  renderItems() {
    let count = 0;
    return this.state.items?.map(item => {
      count++;
      return (
        <List.Item key={count}>
          <List.Icon name="github" size="large" verticalAlign="middle" />
          <List.Content content={item} />
        </List.Item>
      );
    });
  }
}

export default TodoHub;
