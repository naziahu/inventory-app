import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import AddItem from "./components/AddItem";
import Inventory from "./components/Inventory";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventoryItems: [
        {
          itemCode: "IC001",
          name: "Rice",
          price: 260,
          vendor: "XYZ Supplier",
          date: "21/08/2021"
        },
        {
          itemCode: "IC002",
          name: "Biscuit",
          price: 60,
          vendor: "ABC Supplier",
          date: "09/07/2021"
        }
      ]
    };
  }

  handleCallback = (item) => {
    item.date = item.date.toLocaleDateString();
    const items = this.state.inventoryItems;
    items.push(item);
    this.setState({ inventoryItems: items });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/inventory/new">
            <AddItem callback={this.handleCallback} />
          </Route>
          <Route exact path="/inventory">
            <Inventory inventoryItems={this.state.inventoryItems} />
          </Route>
          <Route exact path="/">
            <Redirect to="/inventory" />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
