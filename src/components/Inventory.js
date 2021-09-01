import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactTable from "react-table";
import SearchFilter from "./SearchFilter";

import "react-table/react-table.css";

const columns = [
  {
    Header: "Item Code",
    accessor: "itemCode"
  },
  {
    Header: "Name",
    accessor: "name"
  },
  {
    Header: "Price",
    accessor: "price"
  },
  {
    Header: "Vendor Name",
    accessor: "vendor"
  },
  {
    Header: "Date",
    accessor: "date"
  }
];

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterItems: []
    };
  }

  componentDidMount() {
    this.filterInventory();
  }

  filterInventory = (query, field) => {
    if (query == null || query.trim() === "") {
      this.setState({
        filterItems: this.props.inventoryItems
      });
    } else {
      const filtered = this.props.inventoryItems.filter((e) =>
        e[`${field}`].toLowerCase().includes(query.toLowerCase())
      );
      this.setState({ filterItems: filtered });
    }
  };

  render() {
    return (
      <div>
        <h1>Inventory Data</h1>
        <SearchFilter setSearchQuery={this.filterInventory} />
        <ReactTable
          data={this.state.filterItems}
          columns={columns}
          showPagination={false}
          defaultPageSize={this.props.inventoryItems.length}
        />
        <div style={{ marginTop: "25px" }}>
          <Link className="link" to="/inventory/new">
            Add Item
          </Link>
        </div>
      </div>
    );
  }
}

export default Inventory;
