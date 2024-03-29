import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <Header title="amazing recipes">
        <Link
          to="recipes"
          className="btn btn-secondary text-uppercase btn-lg mt-3"
        >
          search rescipes
        </Link>
      </Header>
    );
  }
}
