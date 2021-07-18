import React, { Component } from "react";
import { ImHome, ImUsers, ImMail4, ImBlog } from "react-icons/im";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";

const pageStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  textAlign: "center",
  fontSize: "40px",
  fontWeight: "600",
};
const Home = () => {
  return (
    <div className="homePage" style={pageStyle}>
      <ImHome />
      <p>Welcome to Home</p>
    </div>
  );
};
const About = () => {
  return (
    <div className="homePage" style={pageStyle}>
      <ImUsers />
      <p>See more about me!</p>
    </div>
  );
};
const Contact = () => {
  return (
    <div className="homePage" style={pageStyle}>
      <ImMail4 />
      <p>Contact me</p>
    </div>
  );
};
const Blog = () => {
  return (
    <div className="homePage" style={pageStyle}>
      <ImBlog />
      <p>Welcome to my blog</p>
    </div>
  );
};
class App extends Component {
  state = {
    userName: "",
    passWord: "",
    isLogin: false,
  };
  handLogin = () => {
    this.setState({ isLogin: !this.state.isLogin });
  };
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/login"
              component={(props) => {
                return (
                  <LoginPage
                    {...props}
                    isLogin={this.state.isLogin}
                    handLogin={this.handLogin}
                  />
                );
              }}
            />
            <Route path="/home">
              {() => {
                return this.state.isLogin ? (
                  <Home />
                ) : (
                  <Redirect to="./login" />
                );
              }}
            </Route>
            <Route path="/about">
              {() => {
                return this.state.isLogin ? (
                  <About />
                ) : (
                  <Redirect to="./login" />
                );
              }}
            </Route>
            <Route path="/contact">
              {() => {
                return this.state.isLogin ? (
                  <Contact />
                ) : (
                  <Redirect to="./login" />
                );
              }}
            </Route>
            <Route path="/blog">
              {() => {
                return this.state.isLogin ? (
                  <Blog />
                ) : (
                  <Redirect to="./login" />
                );
              }}
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
