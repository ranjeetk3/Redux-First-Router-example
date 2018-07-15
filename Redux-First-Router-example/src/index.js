import React, { Component } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";
import { connect, Provider } from "react-redux";
import Link from "redux-first-router-link";
import configureStore from "./store/configureStore";
import Home from "./views/Home";
import About from "./views/About";
import Portfolio from "./views/Portfolio";
import Profile from "./views/Profile";
import Timeline from "./views/Timeline";

const store = configureStore();

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  height: "100vh",
  width: "100vw",
  marginTop: "-8px",
  marginLeft: "-8px"
};

const navLink = {
  backgroundColor: "green",
  padding: "1rem 2rem",
  margin: "1rem",
  color: "white",
  textDecoration: "none",
  fontWeight: "bold"
};

const mapStateToProps = state => {
  return {
    location: state.location
  };
};

class App extends Component {
  static propTypes = {
    location: PropTypes.object
  };

  views = {
    HOME: <Home />,
    ABOUT: <About />,
    PROFILE: <Profile />,
    PORTFOLIO: <Portfolio />,
    TIMELINE: <Timeline />
  };

  render() {
    return (
      <div style={styles}>
        <h1>Redux First Router Example</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to={{ type: "HOME" }} style={navLink}>
            Home
          </Link>
          <Link to={{ type: "ABOUT" }} style={navLink}>
            About Us
          </Link>
          <Link to={{ type: "PORTFOLIO" }} style={navLink}>
            Portfolio
          </Link>
          <Link
            to={{ type: "PROFILE", payload: { username: "Ranjeet Kumar" } }}
            style={navLink}
          >
            Profile
          </Link>
        </div>
        {this.views[this.props.location.type]}
      </div>
    );
  }
}

const ConnectedApp = connect(mapStateToProps)(App);

render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
);
