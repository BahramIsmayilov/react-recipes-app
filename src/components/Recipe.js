import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Recipe extends Component {
  render() {
    const {
      publisher,
      title,
      source_url,
      recipe_id,
      image_url
    } = this.props.recipe;
    return (
      <div className="col-10 mx-auto col-md-6 col-lg-4  my-3">
        <div className="card" style={{ height: "100%" }}>
          <img
            src={image_url}
            alt="recipe"
            className="img-card-top"
            style={{ height: "14rem" }}
          />
          <div className="card-body text-capitalize">
            <h6>{title}</h6>
            <h6 className="text-warning text-slanted">
              provided by {publisher}
            </h6>
            <div className="card-footer">
              <Link
                to={`/recipes/${recipe_id}`}
                className="btn btn-primary text-light"
              >
                details
              </Link>
              <a
                href={source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light btn btn-success mx-2"
              >
                recipe url
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
