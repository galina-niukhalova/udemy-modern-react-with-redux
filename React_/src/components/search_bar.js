import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        // state = obj
        // use for update anything, in our case we need to update search value
        this.state = { term: '' };
    }

    render() {

        // to manipulate with state: this.setState(...)
        return (
            <div className='search-bar'>
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        )
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }

    // state - each component has
    // when state change, component is rerendered
}

export default SearchBar;