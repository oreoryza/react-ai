import React, { Component } from "react";
import AuthContainer from "./containers/AuthContainer";
import ChatContainer from "./containers/ChatContainer";

class App extends Component {
  state = {
    token: null,
  };

  setToken = (token) => {
    this.setState({ token });
  };

  logout = () => {
    this.setState({ token: null });
  }

  render() {
    return this.state.token ? (
      <ChatContainer token={this.state.token} setToken={this.setToken} logout={this.logout} />
    ) : (
      <AuthContainer setToken={this.setToken} />
    );
  }
}

export default App;
