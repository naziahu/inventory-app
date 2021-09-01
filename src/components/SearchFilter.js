import React, { Component } from "react";

class SearchFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: "name",
      query: ""
    };
  }

  setQueryField = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    if (nam === "search") {
      this.setState({
        query: val
      });
    } else {
      this.setState({
        field: val
      });
    }
  };

  handleSearch = (event) => {
    this.props.setSearchQuery(this.state.query, this.state.field);
    event.preventDefault();
  };

  render() {
    return (
      <form>
        <select value={this.state.field} onChange={this.setQueryField}>
          <option value="name">Name</option>
          <option value="vendor">Vendor Name</option>
          <option value="date">Date</option>
        </select>
        <input
          value={this.state.query}
          onInput={this.setQueryField}
          type="text"
          id="header-search"
          placeholder="Search..."
          name="search"
        />
        <button
          type="submit"
          onClick={this.handleSearch}
          className="btn-search"
        >
          Search
        </button>
      </form>
    );
  }
}

export default SearchFilter;
