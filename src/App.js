import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";
import Default from "./pages/Default";

function App() {
  return (
    <div className="container">
      <Home />
      <Recipes />
      <SingleRecipe />
      <Default />
    </div>
  );
}

export default App;
