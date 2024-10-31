import React, { Component } from "react";
import LoginModal from "../components/LoginModal";
import { login, register } from "../utils/api";

class AuthContainer extends Component {
  state = {
    isLogin: true,
    form: {
      username: "",
      password: "",
    },
    loading: false,
    error: null,
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.setToken(token);
    }
  }

  toggleLogin = () => {
    this.setState({
      isLogin: !this.state.isLogin,
      form: {
        username: "",
        password: "",
      },
      error: null,
    });
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.form);
    this.setState({
      loading: true,
      error: null,
    });
    if (this.state.isLogin) {
      login(this.state.form)
      .then((res) => {
        localStorage.setItem("token", res.accessToken);
        this.props.setToken(res.accessToken);
        this.setState({
          error: null,
          form: {
            username: "",
            password: "",
          }
        });
      })
      .catch((err) => {
        this.setState({ error: err.response.data.error });
        console.log(err);
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
    } else {
      register(this.state.form)
        .then(() => {
          alert("Register Success");
          this.setState({
            isLogin: true,
            error: null,
          });
        })
        .catch((err) => {
          this.setState({ error: err.response.data.error });
          console.log(err);
        })
        .finally(() => {
          this.setState({
            loading: false,
          });
        });
    }

    this.setState({
      loading: true,
      error: null,
    });
  };

  render() {
    return (
      <div className="gradient">
        <LoginModal
          form={this.state.form}
          loading={this.state.loading}
          error={this.state.error}
          isLogin={this.state.isLogin}
          toggleLogin={this.toggleLogin}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default AuthContainer;
