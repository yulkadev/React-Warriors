import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const movie = {
  title: "My title",
  vote_average: 10,
  image:
    "https://ichef.bbci.co.uk/news/410/cpsprodpb/AAE7/production/_111515734_gettyimages-1208779325.jpg",
  overview: "My overview"
};

function Image(props) {
  return <img width="100%" src={props.src} alt={props.alt} />;
}

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      like: false
    };
  }

  handleLike = () => {
    this.setState({ like: !this.state.like });
  };
  toggleOverview = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    const {
      data: { title, vote_average, image, overview }
    } = this.props;
    return (
      <div style={{ width: "300px" }}>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <div style={{ display: "Flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toggleOverview}>
            {this.state.show ? "hide" : "show"}
          </button>
          <button
            type="button"
            onClick={this.handleLike}
            className={this.state.like ? "btn--like" : ""}
          >
            like
          </button>
        </div>
        {this.state.show === true ? overview : null}
      </div>
    );
  }
}
function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
