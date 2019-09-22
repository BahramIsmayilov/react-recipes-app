import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default class Default extends Component {
  render() {
    return (
      <Header title="404" styleClass="default-hero">
        <h1 className="text-light text-slanted">Page Not Found</h1>
        <Link
          to="/"
          className="btn btn-secondary text-uppercase mt-3 btn-lg text-light"
        >
          return home page
        </Link>
      </Header>
    );
  }
}
