import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import Dashboard from "./components/dashboard/Dashboard";
import Form from "./components/form/Form";
import Product from "./components/product/Product";
import Header from "./components/header/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [
        { url: "sdffa", product: "shirt", price: "5.00" },
        { url: "cvcx", product: "pants", price: "15.00" },
        { url: "retew", product: "cap", price: "25.00" },
        { url: "fghg", product: "shorts", price: "35.00" }
      ]
    };
  }

  componentDidMount() {
    axios.get("/api/products").then(response => {
      this.setState({ inventory: response.data });
    });
  }

  deleteProduct = ID => {
    axios.delete(`/api/products/${ID}`).then(response => {
      this.setState({ products: response.data });
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form />
      </div>
    );
  }
}
f;
export default App;
