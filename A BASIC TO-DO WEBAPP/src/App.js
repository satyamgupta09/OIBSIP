import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }

  handleAdd=(text_to_add)=>{
    const new_todos=[...this.state.todos,text_to_add];
    this.setState({
      todos:new_todos
    })
  }

  handleRemove=(text)=>{
    const val=this.state.todos.filter((todo)=>(todo.text!==text));
    this.setState({
      todos:val
    })
  }

  render() {
    return (
      <div className="App">
        <span>Todo-Do-App</span>
        <Form  handleAdd={this.handleAdd} />
        <List todos={this.state.todos} handleRemove={this.handleRemove}/>
      </div>
    );
  }
}
