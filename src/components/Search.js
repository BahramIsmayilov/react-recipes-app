import React, { Component } from "react";

export default class Search extends Component {
  render() {
    const { handleChange, handleSubmit, search } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5 text-center">
            <h1 className="text-slanted text-capitalize">
              search recipes whith{" "}
              <strong className="text-orange">Food2Fork</strong>
            </h1>
            <form className="form-group">
              <label htmlFor="search" className="uppercase">
                Types Recipes separated by comma
              </label>
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  id="search"
                  value={search}
                  className="form-control"
                  placeholder="chicken,onion,carrots"
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <button
                    className="input-group-text bg-primary text-white"
                    onClick={handleSubmit}
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
