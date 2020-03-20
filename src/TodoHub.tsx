import React, { FormEvent } from "react";
import "./TodoHub.scss";
import {
  Segment,
  Header,
  Form,
  Input,
  List,
  Checkbox
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { currentTime, todaysDateAlt } from "./Helpers/utilities";

interface IHubProps {}
interface IHubState {
  item: string;
  items: string[];
  localItems: string[];
  viewItemOptions: boolean;
}

class TodoHub extends React.Component<IHubProps, IHubState> {
  constructor(props: IHubState) {
    super(props);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.onMouseEnterItem = this.onMouseEnterItem.bind(this);
    this.onMouseLeaveItem = this.onMouseLeaveItem.bind(this);

    this.state = {
      items: ["testOne"],
      item: "",
      localItems: [],
      viewItemOptions: false
    };
  }

  public async componentDidMount() {
    const existing = localStorage.getItem("local");
    let localItems = existing ? existing.split(",") : [];

    this.setState({ localItems: [...localItems] });
  }

  public render(): JSX.Element {
    return (
      <div className="main">
        <Segment className="mt-5 main-segment">
          <Header className="flex-col">
            <span>Today </span>
            <span>{todaysDateAlt()}</span>
            <span>{currentTime()}</span>
          </Header>
          <Form className="flex-row form-input" onSubmit={this.handleAdd}>
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
    this.setState({ item: e.target.value });
  }

  handleAdd(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // const items: any = this.state.items;
    const item: string = this.state.item;
    if (item.length < 1) {
      return;
    }
    try {
      let localItem;
      let checkValue = localStorage.getItem(item);
      //
      if (checkValue) {
        localItem = JSON.parse(checkValue);
      } else {
        localItem = {
          checked: false,
          value: item,
          date: "date now"
        };
      }

      this.setState({ localItems: [...this.state.localItems, item] }, () => {
        localStorage.setItem("local", this.state.localItems.toString());
      });
      localStorage.setItem(item, JSON.stringify(localItem));
      debugger;
      e.currentTarget.addTodo.value = "";
    } catch (err) {
      console.log(err);
    }
  }

  renderItems(): JSX.Element[] {
    let count = 0;
    const items: string[] = [...this.state.items, ...this.state.localItems];

    return items?.map(item => {
      count++;
      return (
        <Segment
          key={count}
          vertical
          onMouseEnter={this.onMouseEnterItem}
          onMouseLeave={this.onMouseLeaveItem}
        >
          <List.Item>
            <Checkbox />
            <List.Icon name="github" size="large" verticalAlign="middle" />
            <List.Content content={item} />
            <div></div>
            {this.state.viewItemOptions && (
              <div className="item-options">
                <List.Icon
                  className="edit-item"
                  name="edit"
                  size="large"
                  verticalAlign="middle"
                />
                <List.Icon
                  className="x-item"
                  name="x"
                  size="large"
                  verticalAlign="middle"
                />
              </div>
            )}
          </List.Item>
        </Segment>
      );
    });
  }

  onMouseEnterItem(): void {
    this.setState({
      viewItemOptions: true
    });
  }
  onMouseLeaveItem(): void {
    this.setState({
      viewItemOptions: false
    });
  }
}

export default TodoHub;
