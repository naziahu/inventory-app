import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { withRouter } from "react-router";

import "react-datepicker/dist/react-datepicker.css";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCode: "",
      name: "",
      price: "",
      vendor: "",
      date: ""
    };
  }

  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({
      [nam]: val
    });
  };

  handleDateChange = (date) => {
    this.setState({
      date: date
    });
  };

  handleSubmit = (event) => {
    this.props.callback(this.state);
    this.props.history.push("/");
    event.preventDefault();
  };

  handleCancel = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="container-wrapper">
        <h2>Add Inventory Item</h2>
        <div className="section">
          <div className="column right-align">
            <span>Item Code : </span>
            <span>Name : </span>
            <span>Price : </span>
            <span>Vendor Name : </span>
            <span>Date : </span>
          </div>
          <div className="column left-align">
            <span>
              <input
                type="text"
                name="itemCode"
                value={this.state.itemCode}
                onChange={this.changeHandler}
                placeholder="Item Code"
              ></input>
            </span>
            <span>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.changeHandler}
                placeholder="Name"
              ></input>
            </span>
            <span>
              <input
                type="text"
                name="price"
                value={this.state.price}
                onChange={this.changeHandler}
                placeholder="Price"
              ></input>
            </span>
            <span>
              <input
                type="text"
                name="vendor"
                value={this.state.vendor}
                onChange={this.changeHandler}
                placeholder="Vendor Name"
              ></input>
            </span>
            <span>
              <DatePicker
                selected={this.state.date}
                onChange={this.handleDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="Date"
              />
            </span>
          </div>
        </div>
        <div>
          <button className="btn submit" onClick={this.handleSubmit}>
            Submit
          </button>
          <button className="btn cancel" onClick={this.handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(AddItem);
