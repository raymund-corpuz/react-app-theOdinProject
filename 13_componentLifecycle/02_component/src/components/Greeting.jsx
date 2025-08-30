import { Component } from "react";

class Greeting extends Component {
  render() {
    return <h1>Greetings, {this.props.name}</h1>;
  }
}

export default Greeting;
