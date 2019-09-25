import React from "react";

const SearchInput = props => {
  return (
    <form onSubmit={props.handleOnSubmit}>
      <div className="field has-addons" style={{ justifyContent: "center" }}>
        <div className="control">
          <input
            className="input"
            type="text"
            onChange={event => props.handleOnChange(event)}
            value={props.value}
          />
        </div>
        <div className="control">
          <button className="button is-info">Search</button>
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
