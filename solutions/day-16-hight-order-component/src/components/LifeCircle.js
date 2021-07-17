import React, { Component } from "react";
import { FaAdn, FaCloudversify, FaGitlab } from "react-icons/fa";

class LifeCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Minh Tri",
      count: 0,
      message: "",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log(state.firstName);
    return null;
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ firstName: "Le Minh Tri" });
      console.log(this.state.firstName);
    }, 3000);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count > 10) {
      return false;
    } else {
      return true;
    }
  }
  count = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count === 9) {
      this.setState({ message: "done!" });
    }
  }
  render() {
    return (
      <>
        <div>
          <FaAdn />
          <FaCloudversify />
          <FaGitlab />
        </div>
        <h1>{this.state.firstName}</h1>
        <strong>{this.state.count}</strong>
        <button onClick={this.count}>count</button>
        <p>{this.state.message}</p>
      </>
    );
  }
}
export default LifeCircle;
