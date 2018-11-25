import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onSubmitHandler = event => {
    this.props.submit(this.state.term);
    event.preventDefault();
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSubmitHandler} className="ui form">
          <div className="field">
            <label>Image Research</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
            {/*<input type="text" onChange={this.onChangeHandler} /> Uncontrolled component - Event Handler*/}
            {/*Alternate event handler syntax  <input type="text" onChange={(e) => e.target.value} /> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
