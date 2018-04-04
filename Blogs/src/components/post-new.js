import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostNew extends Component {

        renderField(field) {
            const { meta: { touched, error } } = field;
            const className = `form-group ${touched && error ? 'has-danger' : ''}`

            // Field should be responsible for handding any changing inside <input> component
            // field arg contains event argument 
            return (
                <div className={className}>
                    <label>{field.label}</label>
                    <input
                        className='form-control'
                        type='text'
                        {...field.input}
                    />
                    <div className="text-help">
                        {touched ? error : ''}
                    </div>
                </div>
            )
        }

        onSubmit(values) {
            this.props.createPost(values,  () => {
                // will call after request will be successfully complited
                // navigate to home 
                this.props.history.push('/');
            });
        }

        render() {
            // from reduxForm connection
            const { handleSubmit } = this.props;

            return (
                // onSubmit will call only if the form validated
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label='Title'
                        name='title'
                        component={this.renderField}
                    />
                    <Field
                        // label property will be passed into renderField function in field.___
                        label='Categories'
                        name='categories'
                        component={this.renderField}
                    />
                    <Field
                        label='Post Content'
                        name='content'
                        component={this.renderField}
                    />
                    <button type="submit" className="btn btn-primary">Save</button>
                    <Link className='btn btn-danger' to='/'>
                        Cancel
                </Link>
                </form>
            );
        }
    }

// values has different values, which user added
//{title: '', categories: '', content: ''}
function validate(values) {
    const errors = {};

    // Validate the inputs from values
    if (!values.title) {
        errors.title = 'Enter a title';
    }

    if (!values.categories) {
        errors.categories = 'Enter some categories';
    }

    if (!values.content) {
        errors.content = 'Enter some content please';
    }

    // if we returned {} => the form is fine to submit
    // if errors has *any* properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    // unique name of foem
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostNew)
);