import React, { Component } from 'react';

class CategoryForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            budget: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let name = this.state.name;
        let budget = this.state.budget;
        this.props.onCategoryAdd({ name: name, budget: budget });
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <input
                    name='name'
                    type='text'
                    onChange={ this.handleChange }
                    placeholder='Name'
                />
                <input
                    name='budget'
                    type='text'
                    onChange={ this.handleChange }
                    placeholder='Budget'
                />
                <input type='submit'/>

            </form>
        )
    }
}

export default CategoryForm;