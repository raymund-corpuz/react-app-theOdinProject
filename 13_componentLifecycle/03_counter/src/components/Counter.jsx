import { Component } from "react";

class Counter extends Component {
  state = {
    age: 29,
  };

  handleChangeAge = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };
  render() {
    return (
      <div>
        <h1>You are {this.state.age}</h1>

        <button onClick={this.handleChangeAge}>Increase Age</button>
      </div>
    );
  }
}

export default Counter;
