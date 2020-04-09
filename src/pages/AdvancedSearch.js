import React, { Component } from "react";
import Form from "../components/advanced-search-form/AdvancedSearch"

class AdvancedSearch extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2> Welcome to Advanced Search Page</h2>
          <Form />
        </div>
      </div>
    );
  }
}
export default AdvancedSearch;
