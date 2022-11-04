import React from "react";

// class component는 잘쓰이지 않으며 react component확장
// state는 object
class App extends React.Component {
  constructor(props) {
    super(props)
    console.log("hello");
  }

  state = {
    count: 0
  };
  
  add = () => {
    this.setState(current => ({count : current.count + 1}));
  };

  minus = () => {
    this.setState(current => ({count : current.count - 1}));
  };

  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log("update");
  }
  
  render() {
    console.log("render");
    return (
    <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    )
  }
}

export default App;