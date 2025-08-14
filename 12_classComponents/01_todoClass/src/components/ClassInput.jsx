import { Component } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      newTaskText: "",
      editing: false,
      currentid: "",
      currentValue: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
    // this.handleEdit = this.handleEdit.bind(this);
    // this.handleEditInputChanger = this.handleEditInputChanger(this);
    // this.handleEditTodo = this.handleEditTodo(this);
    // this.handleSubmitEdit = this.handleSubmitEdit(this);
  }

  handleInputChange(e) {
    // onChange
    this.setState({ newTaskText: e.target.value });
  }

  handleSubmit(e) {
    // onAddTask
    e.preventDefault();

    const obj = {
      name: this.state.newTaskText,
      id: Date.now(),
    };

    if (this.state.newTaskText !== "") {
      this.setState({ todos: this.state.todos.concat(obj) });
      this.setState({ newTaskText: "" });
    }
  }

  handleDelete(itemId) {
    // onDeleteTask
    this.setState({
      todos: [...this.state.todos].filter((id) => id.id !== itemId),
    });
  }
  handleEditTodo(id, newValue) {
    // onEditTodo
    this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.name = newValue;
      }
    });
  }
  handleSubmitEdit(e) {
    // onSubmitEditTodo
    e.preventDefault();
    this.handleEditTodo(this.state.currentid, this.state.currentValue);
    this.setState({ editing: false });
  }

  handleEdit(todo) {
    // onToggleEdit
    this.setState({ editing: true });
    this.setState({ currentid: todo.id });
    this.setState({ currentValue: todo.name });
  }

  handleEditInputChanger(e) {
    this.setState({ currentValue: e.target.value });
  }

  render() {
    return (
      <section>
        {this.state.editing === false ? (
          <>
            <h3>Todo List</h3>{" "}
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="task-entry">Enter a task:</label>
              <input
                type="text"
                id="task-entry"
                name="task-entry"
                value={this.state.newTaskText}
                onChange={this.handleInputChange}
              />
              <button type="submit">Submit</button>
            </form>
            <h4>All the tasks!</h4>
            <ul>
              {this.state.todos.map((todo) => (
                <li key={todo}>
                  {todo.name}
                  <button onClick={() => this.handleEdit(todo.id)}>edit</button>
                  <button onClick={() => this.handleDelete(todo.id)}>
                    delete
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <form onSubmit={this.handleSubmitEdit}>
            <input
              type="text"
              value={this.state.currentValue}
              name={this.state.currentValue}
              onChange={this.handleEditInputChanger}
            />
            <button onClick={this.handleSubmitEdit}>Update Item</button>
          </form>
        )}
      </section>
    );
  }
}

export default ClassInput;
