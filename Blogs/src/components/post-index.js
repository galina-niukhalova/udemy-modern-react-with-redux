import React, { Component } from 'react';

import fetchPosts from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PostIndex extends Component {

    // this function will be called utomaticaly by REACT
    // when this component has shown up inside the DOM
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts).map(post => {
            return (
                <li className='list-group-item' key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            )
        });
    }

    render() {
        return (
            <div>
                <div className='text-xs-right'>
                    <Link className='btn btn-primary' to='/posts/new'>
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className='list-group'>
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

function mapStateToProp({ posts }) {
    return { posts };
}

export default connect(mapStateToProp, { fetchPosts })(PostIndex);