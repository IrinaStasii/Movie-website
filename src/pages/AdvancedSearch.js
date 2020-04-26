import React, {Component} from "react";
import Form from "../components/advanced-search-form/AdvancedSearch";
import "./AdvanceSearchPage.css";

class AdvancedSearch extends Component {
  render() {
    return (
      <div className="container bg-light p-5 h-auto">
        <h2> Advanced Search </h2>
        <Form/>
      </div>
    );
  }
}

export default AdvancedSearch;
