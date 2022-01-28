import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: "",
  };

  handleInputChange = (e) => {
    // console.log(e.target.value);
    this.setState({ term: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.handleFormSubmit(this.state.term);
  };

  render() {
    return (
      <form className="form-container pt-5" onSubmit={this.handleSubmit}>
        <div className="form-row d-flex justify-content-center mb-5 ">
          <div className="col-6 ">
            <input
              onChange={this.handleInputChange}
              className="form-control"
              placeholder="Search a image theme"
              type="text"
              value={this.state.term}
            />
          </div>
          <div className="col-1">
            <input
              type="submit"
              className="btn btn-md btn-primary"
              value="Search"
            ></input>
          </div>
        </div>
      </form>
      //   <div className="input-container">
      //     <div className="input-card">
      //       <form onSubmit={this.handleSubmit} action="">
      //         <label htmlFor="">Enter a search</label> <br />
      //         <input
      //           onChange={this.handleInputChange}
      //           type="text"
      //           value={this.state.value}
      //         />
      //         <input type="submit" value="Submit" style={{ margin: "10px" }} />
      //       </form>
      //     </div>
      //   </div>
    );
  }
}
