import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {

    renderField(field) {
        // Field should be responsible for handding any changing inside <input> component
        // field arg contains event argument 
        return (
            <div className='form-group'>
                <label>{field.label}</label>
                <input
                    className='form-control'
                    type='text'
                    {...field.input}
                />
            </div>
        )
    }

    render() {
        return (
            <form>
                <Field
                    label='Title'
                    name='title'
                    component={this.renderField}
                />
                <Field
                    // label property will be passed into renderField function in field.___
                    label='Tags'
                    name='tags'
                    component={this.renderField}
                />
                <Field
                    label='Content'
                    name='content'
                    component={this.renderField}
                />
            </form>
        );
    }
}

export default reduxForm({
    // unique name of foem
    form: 'PostsNewForm'
})(PostNew);