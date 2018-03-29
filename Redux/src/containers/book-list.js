import React, { Component } from 'react';
import { selectBook } from '../actions/index';

// for connection react and reduce library
import { connect } from 'react-redux';
// set the action from 'Action creater' to all reducers
import { bindActionCreators } from "redux";

class BookList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }

    renderList() {
        return this.props.books.map(book => {
            return <li
                key={book.title}
                onClick={() => this.props.selectBook(book)}
                className='list-group-item'>{book.title}
            </li>
        });
    }
}

// Whatever an app changed, container will be rerender
function mapStateToProps(state) {
    // Whatever is returned will show up as props inside of BookList
    return {
        books: state.books
    };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// take a function and component and produce a container
// promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);