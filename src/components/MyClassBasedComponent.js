import React from "react";

export default class MyClassBasedComponent extends React.Component {
  constructor() {
    super();
    console.log("constructor çalıştı");
    this.state = { color: "red" };
  }
  componentDidMount() {
    console.log("componentDidMountÇalıştı");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate çalıştı");
  }
  componentWillUnmount() {
    console.log("componentWillUnmountÇalıştı");
  }

  render() {
    console.log("render çalıştı");
    return (
      <div>
        <h1 style={{ color: this.state.color }}>Class based component</h1>
        <button onClick={() => this.setState({ color: "blue" })}>Change</button>
      </div>
    );
  }
}
