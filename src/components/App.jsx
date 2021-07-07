import React from "react";
import { moviesData } from "../moviesData"

class App extends React.Component{
  constructor() {
    super()

    this.state = {
      movies: moviesData
    };
  }

  render() {
    return <div>{this.state.movies.title[0]}</div>;
  }
}

export default App;
