import { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import axios from "axios";

export default class App extends Component {
  state = {
    images: [],
  };
  handleFormSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID GBN-Lo3fx8kNU0nN4N2yL_cmI-DpPyc-zAlqXkLoNzw",
      },
    });
    console.log(response);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <SearchBar handleFormSubmit={this.handleFormSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
