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
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditInputChanger = this.handleEditInputChanger.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ newTaskText: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const obj = { name: this.state.newTaskText, id: Date.now() };

    if (this.state.newTaskText.trim() !== "") {
      this.setState((prev) => ({
        todos: [...prev.todos, obj],
        newTaskText: "",
      }));
    }
  }

  handleDelete(itemId) {
    this.setState((prev) => ({
      todos: prev.todos.filter((todo) => todo.id !== itemId),
    }));
  }

  handleEdit(todo) {
    this.setState({
      editing: true,
      currentid: todo.id,
      currentValue: todo.name,
    });
  }

  handleEditInputChanger(e) {
    this.setState({ currentValue: e.target.value });
  }

  handleSubmitEdit(e) {
    e.preventDefault();
    this.setState((prev) => ({
      todos: prev.todos.map((todo) =>
        todo.id === prev.currentid ? { ...todo, name: prev.currentValue } : todo
      ),
      editing: false,
      currentid: "",
      currentValue: "",
    }));
  }

  render() {
    return (
      <section>
        {!this.state.editing ? (
          <>
            <h3>Todo List</h3>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="task-entry">Enter a task:</label>
              <input
                type="text"
                id="task-entry"
                value={this.state.newTaskText}
                onChange={this.handleInputChange}
              />
              <button type="submit">Submit</button>
            </form>
            <h4>All the tasks!</h4>
            <ul>
              {this.state.todos.map((todo) => (
                <li key={todo.id}>
                  {todo.name}
                  <button onClick={() => this.handleEdit(todo)}>edit</button>
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
              onChange={this.handleEditInputChanger}
            />
            <button type="submit">Update Item</button>
          </form>
        )}
      </section>
    );
  }
}

export default ClassInput;
