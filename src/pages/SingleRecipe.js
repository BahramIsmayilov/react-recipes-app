import React, { Component } from "react";
// import { recipeData } from "../data/tempDetails";
import { Link } from "react-router-dom";

export default class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      recipe: {},
      id,
      loading: true
    };
  }
  async componentDidMount() {
    const url = `https://www.food2fork.com/api/get?key=${process.env.REACT_APP_API_KEY}&rId=${this.state.id}`;
    try {
      const response = await fetch(url);
      const responseData = await response.json();
      this.setState({
        recipe: responseData.recipe,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const {
      image_url,
      ingredients,
      publisher,
      publisher_url,
      source_url
    } = this.state.recipe;
    if (this.state.loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-6 mx-auto mt-5">
              <h1 className="text-uppercase text-orange text-center">
                recipe loading...
              </h1>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Link to="/recipes" className="btn btn-warning text-capitalize">
              back to recipes list
            </Link>
            <img
              src={image_url}
              alt="recipe"
              className="mt-5 d-blok w-100"
              style={{ maxHeight: "30rem" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <h6 className="text-uppercase">
              jalapeno popper grilled cheese sandwich
            </h6>
            <h6 className="text-capitalize text-slanted text-warning my-3">
              provided by {publisher}
            </h6>
            <a
              href={publisher_url}
              className="btn btn-primary text-capitalize mr-3 mb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              publisher webpage
            </a>
            <a
              href={source_url}
              className="btn btn-success text-capitalize mb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              recipe url
            </a>
            <ul className="list-group mt-2">
              <h2 className="mt-2 mb-3 text-capitalize">ingredients</h2>
              {ingredients.map((ingredient, index) => {
                return (
                  <li key={index} className="list-group-item text-slanted">
                    {ingredient}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
