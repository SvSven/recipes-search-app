import React from 'react';

const SearchInput = (props) => {
    return (
        <form onSubmit={props.handleOnSubmit}>
            <input type="text" onChange={event => props.handleOnChange(event)} value={props.value} />
            <button>Search</button>
        </form>
    );
}

export default SearchInput;
