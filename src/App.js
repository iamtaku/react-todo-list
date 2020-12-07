import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

// function App() {
//   const todosComponent = todosData.map((item) => (
//     <TodoItem key={item.id} data={item} />
//   ));
//   return <div className="todo-list">{todosComponent}</div>;
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todosData,
    };
  }
  render() {
    const todoItems = this.state.todosData.map((item) => (
      <TodoItem key={item.id} item={item} />
    ));
    return <div className="todo-list">{todoItems}</div>;
  }
}

export default App;
